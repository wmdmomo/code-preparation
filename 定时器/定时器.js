function startTimer(duration, callback) {
  let timer = null;
  let remainingTime = duration;
  const tick = () => {
    if (remainingTime <= 0) {
      callback();
      clearTimeout(timer);
    } else {
      remainingTime--;
      timer = setTimeout(tick, 1000);
    }
  };
  tick();
}

const timer = startTimer(1, () => {
  console.log("down");
}); // 设置一个5秒的定时器
