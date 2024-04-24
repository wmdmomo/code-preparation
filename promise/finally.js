Promise.prototype.myFinally = function (callback) {
  return this.then(
    (value) => {
      return Promise.resolve(callback()).then(() => value);
    },
    (reason) => {
      return Promise.resolve(callback()).then(() => Promise.reject(reason));
    }
  );
};
function checkMail() {
  return new Promise((resolve, reject) => {
    // if (Math.random() > 0.5) {
    //   resolve("Mail has arrived");
    // } else {
    //   reject(new Error("Failed to arrive"));
    // }
    resolve("Mail has arrived");
  });
}

checkMail()
  .then((mail) => {
    console.log(mail);
    return 4;
  })
  .catch((err) => {
    console.error(err);
  })
  .myFinally(() => {
    console.log("Experiment completed");
  })
  .then((r) => console.log("r", r));
