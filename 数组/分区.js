// input. = [1,2,3,4,6,7,8,12,14,15]
// output = ['1-4','6-8','12','14-15']
var findIndex = function (arr) {
  var res = [],
    start = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      res.push([arr[i]]);
    } else if (arr[i] === arr[i - 1] + 1) {
      res[start].push(arr[i]);
    } else {
      start++;
      res.push([arr[i]]);
    }
  }
  res = res.map((item) => {
    if (item.length > 1) {
      const l = item[0];
      const r = item[item.length - 1];
      return `${l}-${r}`;
    } else {
      return `${item[0]}`;
    }
  });
  return res;
};
console.log(findIndex([1, 2, 3, 4, 6, 7, 8, 12, 14, 15]));
