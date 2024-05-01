new Promise((resolve) => {
  console.log("promise");
  resolve();
})
  .then(function () {
    // 3

    return setTimeout(() => {
      console.log("111");
      return 123;
    }, 2000);
  })
  .then((res) => {
    // 4
    console.log(res + "222");
  })
  .then(() => {
    console.log("333");
  });
