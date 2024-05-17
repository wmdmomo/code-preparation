Array.prototype.myReduce = function (callback, init) {
  if (this.length === 0 && arguments.length < 2) {
    throw new Error("error");
  }
  let acc = init !== undefined ? init : this[0];
  let idx = init !== undefined ? 0 : 1;
  for (let i = idx; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};
// const arr = [1, 2, 3, 4, 5];
// const sum = arr.myReduce((acc, curr) => acc + curr, 4);
// console.log(sum); // 输出: 15
const ss = [].reduce((acc, cur) => acc + cur);
console.log(ss);
