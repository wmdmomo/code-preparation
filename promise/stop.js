// Promise.resolve(8)
//   .then(3)
//   .then((v) => {
//     console.log("eee", v);
//     return new Promise(() => {}); //较为明确的语义
//   })
//   .then(function () {
//     // will never called but will be GCed
//     console.log("then111");
//   })
//   .catch(function () {
//     // will never called but will be GCed
//     console.log("catch");
//   })
//   .then(function () {
//     // will never called but will be GCed
//     console.log("then222");
//   });

function cancelPromiseWrapper(original) {
  let abort;
  //   执行abort()方法 就相当于让abortPromise执行了reject
  //   Promise.race() 静态方法接受一个 promise 可迭代对象作为输入，并返回一个 Promise。这个返回的 promise 会随着第一个 promise 的敲定而敲定。
  const abortPromise = new Promise((_, reject) => (abort = () => reject()));
  let cancelPromise = Promise.race([original, abortPromise]);
  cancelPromise.abort = abort;
  return cancelPromise;
}

const cancellablePromise = cancelPromiseWrapper(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("normal after 5000");
    }, 5000);
  })
);

cancellablePromise
  .then((r) => console.log(r))
  .catch((err) => console.log("err"));
setTimeout(() => {
  cancellablePromise.abort();
}, 2000);
