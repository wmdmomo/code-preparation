function throttle(fn, wait) {
  let isWaiting;
  return function (...args) {
    if (isWaiting) return;
    fn.apply(this, args);
    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
    }, wait);
  };
}

function throttle2(fn, wait, option = { leading: true, trailing: true }) {
  const { leading, trailing } = option;
  let isWaiting = false;
  let lastArg = null;
  return function (...args) {
    const startWaitingPeriod = () => {
      setTimeout(() => {
        if (lastArg && trailing) {
          fn.apply(this, lastArg);
          lastArg = null;
          startWaitingPeriod();
        } else {
          isWaiting = false;
        }
      }, wait);
    };
    if (!isWaiting) {
      isWaiting = true;
      if (leading) {
        fn.apply(this, args);
      } else {
        lastArg = args;
      }
      startWaitingPeriod();
    } else {
      lastArg = args;
    }
  };
}
