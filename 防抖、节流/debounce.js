function debounce(func, wait, option = { leading: true, trailing: true }) {
  // your code here
  let timer = null;
  const { leading, trailing } = option;
  return function (...args) {
    // 就算leading=true && trailing=true isInvoked的作用是 函数只执行一次
    let isInvoked = false;
    if (leading && !timer) {
      func.apply(this, args);
      isInvoked = true;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (trailing && !isInvoked) {
        func.apply(this, args);
      }
      timer = null;
    }, wait);
  };
}

// 头防抖还是尾防抖
function debounce2(func, wait, immediate = true) {
  let timer = null;
  return function (...args) {
    if (immediate && !timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!immediate) {
        func.apply(this, args);
      }
      timer = null;
    }, wait);
  };
}
function testDebounce(e, content) {
  console.log(Math.random() * 100);
  console.log(e, content);
}
var testDebounceFn = debounce2(testDebounce, 3000); // 防抖函数
document.onclick = function (e) {
  testDebounceFn(e, "debounce"); // 给防抖函数传参
};
