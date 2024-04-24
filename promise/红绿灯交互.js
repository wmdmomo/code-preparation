function red() {
  console.log("red");
}
// function green() {
//   console.log("green");
// }
function yellow() {
  console.log("yellow");
}
function wait(fn, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, time);
  });
}

Promise.resolve()
  .then(() => wait(red, 3000))
  .then(() => wait(yellow, 2000));
