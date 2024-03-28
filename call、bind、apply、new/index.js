/**
 * 1. 创建一个全新的对象
 * 2. 该对象执行[[prototype]]操作
 * 3. 函数内部的this指向该对象
 * 4. 如果函数内部没有返回其它对象，new表达式中的函数调用自动返回这个新对象
 */
function myNew(fn, ...args) {
  const newObj = Object.create(fn.prototype);
  const result = fn.apply(newObj, args);
  if (result instanceof Object || typeof result === "function") {
    return result;
  } else {
    return newObj;
  }
}

function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function () {
  console.log(`My name is ${this.name}`);
};
// const me = myNew(Person, "Jack");
// me.sayName();
// console.log(me);

/**
 * call和apply的区别 apply传入的是一个数组 call传入的是一串
 * bind的话也绑定this 但是函数是没有执行的，bind返回的函数如果用new调用的话，
 * this指向不是原始的函数，而是这个new对象
 */

Function.prototype.bind = function (context, ...arg1) {
  const fn = this;
  function returnFn(...arg2) {
    fn.apply(this instanceof returnFn ? this : context, [...arg1, ...arg2]);
  }
  returnFn.prototype = Object.create(fn.prototype);
  return returnFn;
};

var foo = {
  value: 1,
};

function bar(name, age) {
  console.log(this, this.value);
  console.log(name);
  console.log(age);
}

// var bindFoo = bar.bind(foo, "daisy");
// const test = bindFoo("18");

function isInstanceof(instance, target) {
  let proto = Object.getPrototypeOf(instance);
  const targetProto = target.prototype;
  while (proto) {
    if (proto === targetProto) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

Function.prototype.myCall = function (context) {
  context = context || window;
  context.fn = this;
  let arg = [...arguments].slice(1);
  context.fn(...arg);
  delete context.fn;
};
Function.prototype.myApply = function (context, arr) {
  context = context || window;
  context.fn = this;
  if (!arr) context.fn();
  else context.fn(...arr);
  delete context.fn;
};
var foo = {
  value: 1,
};
function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}
bar.myCall(foo, "kevin", 18);
bar.myApply(foo, ["wmd", 89]);
