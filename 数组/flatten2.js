const flatten = (array) => {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      res = res.concat(flatten(array[i]));
    } else {
      res.push(array[i]);
    }
  }
  return res;
};
const arr = [1, 2, [3, [4, [5, 6, 7]]]];
// console.log(flatten(arr));

const flatten2 = (array, deep) => {
  console.log("deep", deep);
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && deep) {
      res = res.concat(flatten2(array[i], deep - 1));
    } else {
      res.push(array[i]);
    }
  }
  return res;
};

console.log(flatten2(arr, 1));
