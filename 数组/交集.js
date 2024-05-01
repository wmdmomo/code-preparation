// 求任意数组的交集
const getIntersection = (...args) => {
  const len = args.length;
  const map = new Map();
  const res = [];
  for (let arr of args) {
    for (let item of arr) {
      const count = map.get(item);
      if (count) {
        map.set(item, count + 1);
      } else {
        map.set(item, 1);
      }
    }
  }

  for (let [key, value] of map) {
    if (value === len) {
      res.push(key);
    }
  }
  console.log(res);
};
// getIntersection([1, 2, 3, 4, 5], [4, 5, 6]);
// const set = new Set([1, 2, 2, 3, 4, 5]);
// for (let item of set) {
//   console.log(item);
// }
const map = new Map();
map.set("name", "www");
map.set("age", 13);
for (let [key, value] of map) {
  console.log(key, value);
}
