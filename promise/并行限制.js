class Scheduler {
  constructor(maxCount) {
    this.queue = [];
    this.maxCount = maxCount;
    this.runCounts = 0;
  }
  add(promiseCreator) {
    this.queue.push(promiseCreator);
  }
  taskStart() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }
  request() {
    if (!this.queue.length || this.runCounts >= this.maxCount) {
      return;
    }
    this.runCounts++;

    this.queue
      .shift()()
      .then(() => {
        this.runCounts--;
        this.request();
      });
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler(3);

const addTask = (time, order) => {
  scheduler.add(() => {
    console.log(`${order} start`, new Date());
    return timeout(time).then(() => console.log(`${order} end`, new Date()));
  });
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(900, "4");
addTask(100, "5");
scheduler.taskStart();
// 2
// 3
// 1
// 4
