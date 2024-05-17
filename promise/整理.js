// 发送一个请求，如何在30秒后自动rejected，用Promise.race怎么实现
function timeoutPromise(promise) {
  let timer;
  const rejectPromise = new Promise((_, reject) => {
    timer = setTimeout(() => {
      reject();
    }, 3000);
  });
  return Promise.race([promise, rejectPromise]).finally(() => {
    clearTimeout(timer);
  });
}

function timeoutPromise2(promise) {
  let timer;

  return new Promise((resolve, reject) => {
    timer = setTimeout(() => {
      reject();
    }, 3000);
    promise
      .then((r) => {
        resolve(r);
      })
      .catch((error) => {
        reject(error);
      })
      .finally(() => {
        clearTimeout(timer);
      });
  });
}
const fetch = () => {
  return new Promise((r) => {
    setTimeout(() => {
      r("success");
    }, 4000);
  });
};
// timeoutPromise(fetch())
//   .then((r) => {
//     console.log(r);
//   })
//   .catch((err) => console.log("time out"));

//用Promise.all实现Promise.allSettled
function allSettled(promises) {
  return Promise.all(
    promises.map((promise) =>
      promise
        .then((value) => ({ status: "fulfilled", value }))
        .catch((reason) => ({ status: "rejected", reason }))
    )
  );
}
const promises = [
  Promise.resolve(1),
  Promise.reject("error"),
  Promise.resolve(3),
];

Promise.allSettled(promises).then((results) => {
  console.log(results);
});
