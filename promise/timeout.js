function timeoutPromise(promise, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Promise timed out"));
    }, timeout);

    promise
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      })
      .finally(() => {
        clearTimeout(timer);
      });
  });
}

function timeoutPromise(promise, timeout) {
  let timer;
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      timer = setTimeout(() => {
        reject("time out");
      }, timeout);
    }),
  ]).finally(() => {
    clearTimeout(timer);
  });
}
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

timeoutPromise2(myPromise, 1500)
  .then((result) => {
    console.log(result); // 不会执行，因为超时了
  })
  .catch((error) => {
    console.error(error); // 输出：Error: Promise timed out
  });
