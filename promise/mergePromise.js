const time = (timer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
};
const ajax1 = () =>
  time(2000).then(() => {
    console.log(1);
    return 1;
  });
const ajax2 = () =>
  time(1000).then(() => {
    console.log(2);
    return 2;
  });
const ajax3 = () =>
  time(1000).then(() => {
    console.log(3);
    return 3;
  });

function mergePromise() {
  // 在这里写代码
}

mergePromise2([ajax1, ajax2, ajax3]).then((data) => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]
// 这里的mergePromise要求顺序输出
// Promise.all是并行的
function mergePromise(promises) {
  let res = [];
  return promises.reduce((acc, cur) => {
    return acc.then(cur).then((r) => {
      res = [...res, r];
      return res;
    });
  }, Promise.resolve());
}

function mergePromise2(promises) {
  let res = [];
  let promise = Promise.resolve();
  promises.forEach((pro) => {
    promise = promise.then(pro).then((r) => {
      res.push(r);
      return res;
    });
  });
  return promise;
}
