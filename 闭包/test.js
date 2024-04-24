var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  // 如果nums2遍历完，nums1剩余的元素可以保持不动
  // 如果nums2没有遍历完，需要把nums2剩余元素拷贝到nums1里面
  nums1.splice(0, len2 + 1, nums2.slice(0, len2 + 1));
};
const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1);
