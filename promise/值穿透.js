Promise.resolve(1)
  .then(2) // 注意这里
  .then(Promise.resolve(3))
  .then((r) => console.log("eee", r));
