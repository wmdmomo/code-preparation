function throttle(func, wait, option = { leading: true, trailing: true }) {
  let isWaiting = false;
  let lastArg = null;
  const { leading, trailing } = option;
  return function (...args) {
    const startWaitingPeriod = () => {
      setTimeout(() => {
        if (trailing && lastArg) {
          func.apply(this, lastArg);
          lastArg = null;
          startWaitingPeriod();
        } else {
          isWaiting = false;
        }
      }, wait);
    };
    if (!isWaiting) {
      if (leading) {
        func.apply(this, args);
      } else {
        lastArg = args;
      }
      startWaitingPeriod();
    } else {
      lastArg = args;
    }
  };
}

let num = 0;
function testDebounce(num) {
  console.log(num);
}
var testDebounceFn = throttle(testDebounce, 3000, {
  leading: false,
  trailing: true,
}); // 防抖函数
document.onclick = function (e) {
  num++;
  testDebounceFn(num, "debounce"); // 给防抖函数传参
};
