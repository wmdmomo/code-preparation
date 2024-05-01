// input. = [1,2,3,4,6,7,8,12,14,15]
// output = ['1-4','6-8','12','14-15']
var summaryRanges = function (nums) {
  let l = 0,
    r = 1;
  let res = [];
  const len = nums.length;
  while (l < len) {
    while (r < len && nums[r] === nums[r - 1] + 1) {
      r++;
    }
    if (r - l === 1) {
      res.push(`${nums[l]}`);
    } else {
      res.push(`${nums[l]}->${nums[r - 1]}`);
    }
    l = r;
    r++;
  }
  return res;
};
console.log(summaryRanges([1, 2, 3, 4, 6, 7, 8, 12, 14, 15]));
