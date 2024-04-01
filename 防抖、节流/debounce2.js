function debounce(fn, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

function debounce2(fn, wait, immediate = false) {
  let timer;
  return function (...args) {
    if (immediate && !timer) {
      fn.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!immediate) {
        fn.apply(this, args);
      }
      timer = null;
    }, wait);
  };
}

function debounce3(fn, wait, option = { leading: false, trailing: true }) {
  const { leading, trailing } = option;
  let timer;
  return function (...args) {
    let isInvoked = false;
    if (leading && !timer) {
      fn.apply(this, args);
      isInvoked = true;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (trailing && !isInvoked) {
        fn.apply(this, args);
      }
      timer = null;
    }, wait);
  };
}
