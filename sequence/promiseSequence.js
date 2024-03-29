const promiseFuncs = [
  function (input) {
    console.log("111");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("111 inside");
        resolve(input * 2);
      }, 3000);
    });
  },

  function (input) {
    console.log("222");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("222 inside");
        resolve(input * 8);
      }, 1000);
    });
  },
];
let promise = Promise.resolve(3);
// test 这里会马上打出 index 0 index 1
// 但是只有fn0的函数执行好之后 才会执行fn1
// 相当于一个await
// promiseFuncs.forEach((promiseFunc, index) => {
//   console.log("index", index);

// });
// for (let fun of promiseFuncs) {
//   promise = promise.then(fun);
// }

// promise.then((res) => console.log(res));

// Promise.resolve(3)
//   .then((r) => {
//     return new Promise((r) => {
//       r("oooo");
//     });
//   })
//   .then((r) => console.log("ppp", r));
Promise.stop = function () {
  return new Promise(function () {});
};
Promise.resolve(4)
  .then(() => {
    console.log("pppp");
  })
  .then(() => {
    return Promise.stop();
    // 终止 Promise 链，让下面的 then、catch 和 finally 都不执行
  })
  .then(() => console.log("then"))
  .catch(() => console.log("catch"))
  .finally(() => console.log("finally"));
