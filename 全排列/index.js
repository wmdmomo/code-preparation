let permuteRecursive = function (nums, arr, count) {
  if (nums.length - 1 === count) arr.push(nums.slice(0));
  else {
    for (let i = count; i < nums.length; i++) {
      [nums[i], nums[count]] = [nums[count], nums[i]];
      permuteRecursive(nums, arr, count + 1);
      [nums[i], nums[count]] = [nums[count], nums[i]];
    }
  }
};
var permute = function (nums) {
  let result = [];
  permuteRecursive(nums, result, 0);
  return result;
};
console.log(permute([1, 2, 3]));
