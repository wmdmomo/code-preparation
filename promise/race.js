Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    for (let pro of promises) {
      Promise.resolve(pro)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

Promise.reject(1)
  .then((r) => {
    console.log(r);
    return 2;
  })
  .catch((r) => {
    console.log("catch", r);
    return r;
    // return 3;
  })
  .then((r) => {
    console.log("then", r);
    return 4;
  });
