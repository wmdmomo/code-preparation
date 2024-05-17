Promise.myAll = function (promises) {
  const len = promises.length;
  var res = new Array(len),
    cnt = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i])
        .then((r) => {
          res[i] = r;
          cnt++;
          if (cnt === len) {
            resolve(res);
          }
        })
        .catch((err) => reject(err));
    }
  });
};
const p1 = new Promise((r) => {
  setTimeout(() => {
    r("p1");
  }, 3000);
});
const p2 = new Promise((r) => {
  setTimeout(() => {
    r("p2");
  }, 1000);
});
Promise.myAll([p1, p2]).then((r) => console.log(r));
