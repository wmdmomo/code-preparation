// 左闭右开的写法
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    const middle = left + ((right - left) >> 1);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  console.log(left);
  return left;
};
searchInsert([1, 3, 5, 6], 7);
