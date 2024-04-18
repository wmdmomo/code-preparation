var minimumTotal = function (triangle) {
  const row = triangle.length;
  const dp = Array.from(new Array(row), () => new Array(row).fill(0));
  dp[row - 1] = triangle[row - 1];
  for (let i = row - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }
  return dp[0][0];
};
