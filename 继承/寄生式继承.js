function Object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
function createAnother(original) {
  const clone = Object(original);
  clone.sayHi = function () {
    console.log("hello");
  };
  return clone;
}
const person = {
  name: "Nicholas",
  friends: ["shelly", "Van"],
};
const anotherPerson = createAnother(person);
anotherPerson.friends.push("wmd");
console.log(anotherPerson.friends);
console.log(person.friends);
