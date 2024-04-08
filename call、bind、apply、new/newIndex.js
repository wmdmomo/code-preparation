const returnThis = function () {
  console.log("this", this);
  return this;
};
const obj = {};

Function.prototype.mycall = function (context, ...args) {
  //   const symbol = Symbol();
  context = Object(context || window);
  context["fn"] = this;

  let res = context["fn"](...args);
  //   delete context["fn"];
  return res;
};
// console.log(returnThis.mycall(1));
const target = {};

let targetCopied = {};
let modifiedProp = null;
const proxy = new Proxy(target, {
  set(target, prop, val) {
    if (typeof prop === "string" || typeof prop === "number") {
      // copy
      console.log("pppp");
      target[prop] = "bfe";
      targetCopied[prop] = "bfe";
    }
    target[prop] = val;
  },
});

// returnThis.call(proxy);
proxy.name = "ppp";
console.log(target, targetCopied, target === targetCopied);
