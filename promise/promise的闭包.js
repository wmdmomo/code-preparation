var a = 1;
var p = new Promise((resolve) => resolve(a, Math.random()));

a = 2;
p.then((value) => console.log(value)); // => 1
const es = await 2;
