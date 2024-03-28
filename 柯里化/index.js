function curry(func) {
  return function curried(...args) {
    // 1. if enough args, call func
    // 2. if not enough, bind the args and wait for new one

    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      // 1,2
      return curried.bind(this, ...args);
    }
  };
}

// 测试
function sum(a, b, c) {
  return a + b + c;
}
// const curriedSum = curry(sum);
// console.log(curriedSum(1, 2, 3));
// console.log(curriedSum(1)(2, 3));
// console.log(curriedSum(1)(2)(3));

/**
 * @param { number } num
 */

function sum(num, currentSum = 0) {
  const newCurrentSum = num + currentSum;

  const func = function (arg) {
    return sum(arg, newCurrentSum);
  };

  func.valueOf = () => newCurrentSum;
  //   func.toString = () => newCurrentSum.toString()

  return func;
}
// const sum1 = sum(1);
// sum1(2) == 3; // true
// sum1(3) == 4; // true
// console.log(sum(5)(-1)(2) == 6); // true
// sum(5)(-1)(2) == 6; // true

/**
 * 柯里化 有placeholder
 */
