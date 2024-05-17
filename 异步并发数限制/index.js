/**
 * 要求：有很多个并发任务，控制同一时间内执行的任务数不超过N个，并尽快执行完
 */
const limitRequest = (tasks, limit) => {
  const taskLength = tasks.length;
  let result = new Array(taskLength).fill(null);
  let finishCount = 0;
  let start = 0;
  return new Promise((resolve) => {
    function request() {
      const cur = start++;
      console.log("开始", cur, new Date().toLocaleString());
      fetch(tasks[cur])
        .then((res) => (result[cur] = res))
        .catch((err) => (result[cur] = err))
        .finally(() => {
          finishCount++;
          console.log("结束", cur, new Date().toLocaleString());
          if (finishCount === taskLength) {
            resolve(result);
          } else if (start < taskLength) {
            request();
          }
        });
    }
    for (let i = 0; i < limit; i++) {
      request();
    }
  });
};

function fetch(url) {
  return new Promise((r) => {
    let start = new Date();
    setTimeout(() => {
      r(`${url} start:${start}  end:${new Date()}`);
    }, 10000 * Math.random());
  });
}
const arr = [1, 2, 3, 4, 5];
limitRequest(arr, 2).then((r) => console.log(r));
