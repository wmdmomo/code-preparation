var longestPalindrome = function (s) {
  const len = s.length;
  const dp = Array.from(new Array(len), () => new Array(len).fill(0));
  let res = "";
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else if (j - 1 === i) {
        if (s[i] === s[j]) {
          dp[i][j] = 1;
        }
      } else {
        if (dp[i + 1][j - 1] === 1 && s[i] === s[j]) {
          dp[i][j] = 1;
        }
      }
      if (dp[i][j] === 1) {
        if (j - i + 1 > res.legth) {
          res = s.slice(i, j + 1);
        }
      }
    }
  }
  return res;
};
