var p1 = new Promise((resolve, reject) => {
  resolve("p1");
});
var p2 = new Promise((resolve, reject) => {
  resolve("p2");
});
var p3 = new Promise((resolve, reject) => {
  reject("p3");
});
// Promise.all([p1, p2, p3].map((p) => p.catch((e) => "出错后返回的值")))
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
Promise.allSettled([p1, p2, p3]).then((val) => console.log(val));
