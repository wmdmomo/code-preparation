var singleton = (function () {
  var privateVariable = 10;
  function privateFunction() {
    return [false, privateVariable];
  }
  return {
    publicProperty: true,
    publicMethod: function () {
      privateVariable++;
      return privateFunction();
    },
  };
})();
console.log(singleton.publicMethod());
console.log(singleton.publicProperty);
