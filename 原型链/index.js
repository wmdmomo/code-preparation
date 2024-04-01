function superType(name) {
  this.name = name;
  this.cols = ["red", "yell", "blue"];
}
superType.prototype.sayName = function () {
  console.log(this.name);
};
function subType(name, age) {
  console.log("hhh", this);
  //   superType.call(this, name);
  this.age = age;
}
subType.prototype = new superType();
subType.prototype.sayAge = function () {
  console.log(this.age);
};
var s1 = new subType("w", 24);
s1.cols.push("ff");
console.log(s1.cols);
s1.sayAge();
var s2 = new subType("q", 25);
console.log(s2.cols);
s2.sayAge();
