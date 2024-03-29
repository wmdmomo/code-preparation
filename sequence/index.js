const asyncTimes2 = (num, callback) => {
  setTimeout(() => callback(null, num * 2), 100);
};

const asyncTimes4 = sequence([asyncTimes2, asyncTimes2]);

asyncTimes4((error, data) => {
  console.log(data); // 4
}, 1);
function sequence(funcs) {
  const promiseFuncs = funcs.map(promisify1);
  console.log(promiseFuncs);
  return function (callback, input) {
    // init promise
    let promise = Promise.resolve(input);

    // add all promiseFuncs to promise
    promiseFuncs.forEach((promiseFunc) => {
      promise = promise.then(promiseFunc);
    });

    // handle resolved or rejected promise
    promise
      .then((data) => {
        callback(undefined, data);
      })
      .catch(callback);
  };
}

function promisify(fn) {
  return function (input) {
    return new Promise((resolve, reject) => {
      // fn的第一个参数 表示callback
      fn((err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      }, input);
    });
  };
}

// 看懂了～
function promisify1(original) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      args.push(function callback(err, ...values) {
        if (err) {
          reject(err);
        }
        resolve(...values);
      });
      original.call(this, ...args);
    });
  };
}
