function countDown(ddl) {
  const time = ddl - new Date();

  let timer;
  if (time < 0) {
    clearTimeout(timer);
    return;
  }
  const hour = Math.floor((time / 1000 / 60 / 60) % 24);
  const min = Math.floor((time / 1000 / 60) % 60);
  const sec = Math.floor((time / 1000) % 60);
  console.log(hour + "/" + min + "/" + sec);
  timer = setTimeout(() => {
    countDown(ddl);
  }, 1000);
}

// 只是说他努力去校正了我的时间差
function countDown1(ddl) {
  const startTime = Date.now();
  let timer;
  const tick = () => {
    const time = ddl - new Date();
    const elapsedTime = Date.now() - startTime;
    if (time < 0) {
      clearTimeout(timer);
      return;
    }
    const hour = Math.floor((time / 1000 / 60 / 60) % 24);
    const min = Math.floor((time / 1000 / 60) % 60);
    const sec = Math.round((time / 1000) % 60);
    console.log(hour + "/" + min + "/" + sec);
    const delay = Math.max(1000 - (elapsedTime % 1000), 0);
    timer = setTimeout(tick, delay);
  };
  tick();
}

countDown1(Date.now() + 5000);
