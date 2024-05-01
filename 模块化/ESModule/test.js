let age = 14;
let arr = [1, 2, 3];
const objDefault = {
  age,
  arr,
};

setTimeout(() => {
  age = 28;
  arr.push(5);
  console.log(age, objDefault, arr);
}, 1000);
