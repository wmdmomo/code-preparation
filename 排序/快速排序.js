const quickSort = (start, end, array) => {
  if (start >= end) {
    return;
  }
  const index = partition(start, end, array);
  quickSort(start, index - 1, array);
  quickSort(index + 1, end, array);
};
const partition = (start, end, array) => {
  const target = array[end];
  let prev = start;
  for (let i = start; i < end; i++) {
    if (array[i] < target) {
      [array[prev], array[i]] = [array[i], array[prev]];
      prev++;
    }
  }
  [array[prev], array[end]] = [array[end], array[prev]];
  return prev;
};
const array = [2, 1, 67, 13, 98, 12];
quickSort(0, array.length - 1, array);
console.log(array);
