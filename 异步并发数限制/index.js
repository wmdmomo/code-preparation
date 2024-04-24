/**
 * 要求：有很多个并发任务，控制同一时间内执行的任务数不超过N个，并尽快执行完
 */
const limitRequest = (tasks, limit) => {
  const taskLength = tasks.length;
  let result = new Array(taskLength).fill(null);
  // 已完成的任务的总数
  let finishCount = 0;
  let start = 0;
  return new Promise((resolve) => {
    function request() {
      while (limit > 0 && start < taskLength) {
        limit--;
        // 此时 cur=0
        const cur = start++;
        console.log("开始", cur, new Date().toLocaleString());
        fetch(tasks[cur])
          .then((res) => (result[cur] = res))
          .catch((err) => (result[cur] = err))
          .finally(() => {
            limit++;
            finishCount++;
            console.log("结束", cur, new Date().toLocaleString());
            if (finishCount === taskLength) {
              resolve(result);
            } else {
              request();
            }
          });
      }
    }
    request();
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
const arr = [1, 2, 3];
limitRequest(arr, 1).then((r) => console.log(r));
