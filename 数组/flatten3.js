const flatten = (arr, deep) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && deep) {
      res = res.concat(flatten(arr[i], deep - 1));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};
console.log(flatten([1, [2, [3, 4], 5]], 1));
