// 螺旋矩阵
var spiralOrder = function (matrix) {
  const row = matrix.length,
    column = matrix[0].length;
  let start = 0,
    end = row - 1,
    left = 0,
    right = column - 1;
  const res = [];
  while (start <= end && left <= right) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[start][i]);
    }
    start++;
    for (let i = start; i <= end; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i >= left; i--) {
      res.push(matrix[end][i]);
    }
    end--;
    for (let i = end; i >= start; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};
