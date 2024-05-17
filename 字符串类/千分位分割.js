function numFormat(num) {
  const numString = num + "";
  const hasDot = numString.includes(".");
  const group = hasDot ? numString.split(".") : [numString];
  const left = stringSplit(group[0]);
  const right = hasDot ? "." + group[1] : "";
  return left + right;
}

function stringSplit(str) {
  return str
    .split("")
    .reverse()
    .reduce((acc, cur, index) => {
      return (index % 3 ? cur : cur + ",") + acc;
    });
}
console.log(numFormat(12345678.1223));
console.log(numFormat(12345678));
