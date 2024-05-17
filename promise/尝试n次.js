function fun() {
  let n = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 0.7) {
        resolve(n);
      } else {
        reject(n);
      }
    }, 500);
  });
}
function retry(fun, times) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        const res = await fun();
        resolve(res);
        console.log("成功", res);
        break;
      } catch (err) {
        console.log("失败一次", err);
        if (!times) {
          reject(err);
        }
      }
    }
  });
}
retry(fun, 10)
  .then((r) => console.log(r))
  .catch(() => console.log("err"));
