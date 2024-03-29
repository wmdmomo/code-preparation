function someAsyncTask(num, num1, cb) {
  setTimeout(() => {
    const result = num * 100;
    typeof cb === "function" && cb(null, result);
  }, 2000);
}
function asyncAdd(a, b, cb) {
  setTimeout(() => {
    cb(null, a + b);
  }, Math.random() * 1000);
}
// someAsyncTask(100, (result) => {
//   console.log("回调异步处理的结果是:" + result);
// });

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      args.push(function callback(err, values) {
        if (err) {
          reject(err);
        } else {
          resolve(values);
        }
      });
      fn.apply(this, args);
    });
  };
}

const f1 = promisify(asyncAdd);
f1(100, 200).then((res) => console.log(res));
