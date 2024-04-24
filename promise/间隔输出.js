const arr = [1, 2, 3];
const sleep = (x) => {
  return new Promise((r) => {
    setTimeout(() => {
      r();
      console.log(x);
    }, 1000);
  });
};
arr.reduce((p, x) => {
  return p.then(() => sleep(x));
}, Promise.resolve());
