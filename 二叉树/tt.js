Function.prototype.c = () => {
  console.log(1);
};
Object.prototype.b = () => {
  console.log(2);
};
function A() {}
const a = new A();
a.c();
a.b();
