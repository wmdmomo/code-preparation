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
