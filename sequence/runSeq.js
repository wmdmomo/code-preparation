/**
 * 说明：实现一个方法，传入一组函数，让它们依次执行，并将上一个函数的执行结果传递给下一个函数
传入的函数可能是同步也可能是异步，异步函数返回 Promise
如果传入的函数是异步函数，则等他返回后才执行下一个
如果某个函数调用出错则中断执行，否则返回最后一个函数的结果
示例：
runSeq([
() => 300,
v => new Promise(resolve => setTimeout(() => { resolve('foo'); }, v)),
])； // 'foo'
 */

runSeq([
  () => 3000,
  (v) =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        console.log("foo reslove");
        resolve(1);
      }, v)
    ),
  (num) =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("xxx reslove");
        resolve(num * 3);
      }, 5000)
    ),
  (v) => v + "ppp",
]); // 'foo'

function runSeq(list) {
  let p = Promise.resolve();
  for (let i = 0; i < list.length; i++) {
    p = p.then(list[i]).catch(() => new Promise(() => {}));
  }
  p.then((res) => console.log("res", res));

  const result = list.reduce((prevCallTask, now) => {
    return prevCallTask.then(now);
  }, Promise.resolve());
  result.then((r) => console.log("rrrr", r));
}
