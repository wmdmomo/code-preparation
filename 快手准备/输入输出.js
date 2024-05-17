var name = "x";
var people = {
  name: "y",
  setName: (n) => {
    console.log("this", this);
    this.name = n;
    return () => {
      console.log("this 2", this);
      return this.name;
    };
  },
};
var getName = people.setName(name);

console.log(people.name); // y
console.log(getName()); // x
function Person(name) {
  let age = 25; // 私有属性
  function sex() {
    // 私有方法
    console.log("male");
  }

  this.name = name; // 实例属性
  this.run = function () {
    // 实例方法
    console.log("run");
  };
}

Person.home = "Beijing"; // 静态属性
Person.talk = function () {
  // 静态方法
  console.log("talk");
};

Person.prototype.height = 180; // 原型(公共)属性
Person.prototype.swim = function () {
  // 原型(公共)方法
  console.log("swim");
};

// class语法糖
class Foo {
  constructor(name) {
    this.name = name; // 实例属性
    this.run = function () {
      // 实例方法
      console.log("run");
    };
  }
  static home = "Beijing"; // 静态属性
  static talk() {
    // 静态方法
    console.log("talk");
  }
  id = "78979"; // 实例属性，注意！！
  swim() {
    // 原型方法
    console.log("swim");
  }
}
