function reverse(num) {
  const flag = num >= 0;
  let tmp = (Math.abs(num) + "").split("").reverse().join("");
  let res;
  const dotIndex = tmp.indexOf(".");
  if (dotIndex !== -1) {
    tmp = tmp.split(".");
    res = Number(tmp[1] + "." + tmp[0]);
  } else {
    res = Number(tmp);
  }
  res = flag ? res : -res;
  console.log(res);
}
reverse(-123.00456);
reverse(12300.456);
reverse(1200);
reverse(0);
