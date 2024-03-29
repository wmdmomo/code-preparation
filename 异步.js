function asyncAdd(a, b, cb) {
  setTimeout(() => {
    cb(null, a + b);
  }, Math.random() * 1000);
}
const promiseAdd = (a, b) =>
  new Promise((resolve, reject) => {
    asyncAdd(a, b, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
async function serialSum(...args) {
  // PS： args.reduce(callbackFn,initialValue) initialValue的默认值是数组第一个元素

  return args.reduce((prevCallTask, now) => {
    return prevCallTask.then((res) => promiseAdd(res, now));
  }, Promise.resolve(0));
}
// 3. 并行处理
async function parallelSum(...args) {
  if (args.length === 1) return args[0];
  const tasks = [];
  for (let i = 0; i < args.length; i += 2) {
    tasks.push(promiseAdd(args[i], args[i + 1] || 0));
  }
  const results = await Promise.all(tasks);
  return parallelSum(...results);
}

// 测试
(async () => {
  console.log("Running...");
  const res1 = await serialSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12);
  console.log(res1);
  const res2 = await parallelSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12);
  console.log(res2);
  console.log("Done");
})();
