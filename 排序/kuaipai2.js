const partition = (arr, start, end) => {
  const target = arr[end];
  let pre = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < target) {
      [arr[pre], arr[i]] = [arr[i], arr[pre]];
      pre++;
    }
  }
  [arr[pre], arr[end]] = [arr[end], arr[pre]];
  return pre;
};
const quickSort = (arr, start, end) => {
  if (start > end) return;
  const index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
};
const arr = [3, 1, 45, 12, 67, 89, 0];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
