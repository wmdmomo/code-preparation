class EventEmitter {
  handlers = {};
  on(type, handler) {
    if (this.handlers[type]) {
      this.handlers[type].push(handler);
    } else {
      this.handlers[type] = [handler];
    }
  }
  emit(type, ...args) {
    if (this.handlers[type]) {
      this.handlers[type].forEach((e) => {
        e.apply(this, args);
      });
    }
  }
  once(type, handler) {
    const fn = (...args) => {
      handler.apply(this, args);
      this.off(type, fn);
    };
    this.on(type, fn);
  }
  off(type, handler) {
    if (this.handlers[type]) {
      this.handlers[type] = this.handlers[type].filter((e) => e !== handler);
    }
  }
}

let eb = new EventEmitter();
function test1(...params) {
  console.log(11, ...params);
}
function test2(...params) {
  console.log(22, ...params);
}
function test3(...params) {
  console.log(33, ...params);
}
function test4(...params) {
  // console.log(params)
  console.log(44, ...params);
}
// eb.on("event1", test1);
eb.once("event1", test2);
// eb.off("event1", test1);
eb.emit("event1", "第一次rrrr");
eb.emit("event1", "第2次rrrr");
