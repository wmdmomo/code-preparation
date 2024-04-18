function add(m) {
  var tmp = function (n) {
    return add(m + n);
  };
  tmp.toString = function () {
    return m;
  };
  return tmp;
}
console.log(add(1)(2));
function test() {
  function fn() {
    console.log("fn");
    return "return语句";
  }
  //fn.toString = () => {
  //    return 'toString'
  //}
  return fn;
}
// console.log(test());
