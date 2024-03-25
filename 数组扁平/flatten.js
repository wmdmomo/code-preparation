const arr = [1, [2, [3, 4]]];
const flatten = (arr) => {
  //   console.log("hhhh", arr);
  return [].concat(
    ...arr.map((item) => (Array.isArray(item) ? flatten(item) : item))
  );
};
// console.log(flatten(arr));
// console.log([].concat(...[1, 2, [4, 5, [6, 7]]]));

const flatten2 = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten2(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};
// console.log(flatten2(arr));

const flatten3 = (arr, n) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && n) {
      res = res.concat(flatten3(arr[i], n--));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};
console.log(flatten3(arr, 1));
