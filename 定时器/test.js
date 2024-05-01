const api = () => {
  return new Promise((r) => {
    setTimeout(() => {
      r(33333);
    }, 500);
  });
};
const warning = () => {
  console.log("warning");
};
function timeoutPromise(apiFn, warningFn, time) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      warningFn();
      reject("time out");
    }, time);
    apiFn()
      .then((r) => {
        resolve(r);
      })
      .catch((e) => {
        reject(e);
      })
      .finally(() => {
        clearTimeout(timer);
      });
  });
}
timeoutPromise(api, warning, 1000)
  .then((r) => console.log(r))
  .catch((error) => {
    console.error("Error:", error);
  });
