let obj1 = new Object();
let obj2 = obj1;
obj1.name = "ni";
obj1 = new Object();
obj1.name = "we";
console.log(obj2.name, obj1.name);
