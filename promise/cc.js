const oldObj = {
  name: "wmd",
  age: 24,
};
const newObj = {
  ...oldObj,
  name: "eee",
};
console.log(oldObj === newObj);
