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

//不定参数函数的柯里化
function curry1(func) {
  let argArr = [];
  return function temp(...args) {
    if (!args.length) {
      let result = func.apply(this, argArr);
      argArr = []; //保证下次调用
      return result;
    } else {
      argArr = argArr.concat(args);
      return temp;
    }
  };
}
function add1(...args) {
  return args.reduce((acc, cur) => acc + cur);
}
let cAdd1 = curry1(add1);
console.log(cAdd1(1)(2)(3)(4, 5)()); //15

// const sum1 = sum(1);
// sum1(2) == 3; // true
// sum1(3) == 4; // true
// console.log(sum(5)(-1)(2) == 6); // true
// sum(5)(-1)(2) == 6; // true

/**
 * 柯里化 有placeholder
 */
function add(...args1) {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  let argList = args1;

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  const collect = function (...args2) {
    argList = [...argList, ...args2];
    return collect;
  };

  // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  collect.toString = function () {
    return argList.reduce((a, b) => a + b, 0);
  };

  return collect;
}
console.log(add(1)(2)(3).toString()); // 6
console.log(add(1, 2, 3)(4).toString()); // 10;
console.log(add(1)(2)(3)(4)(5).toString()); // 15;
