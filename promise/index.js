class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.handlers = [];
    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (err) {
      this._reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.handlers.push({
        fulfilled: (value) => {
          if (typeof onFulfilled !== "function") {
            resolve(value);
            return;
          }
          try {
            resolve(onFulfilled(value));
          } catch (err) {
            reject(err);
          }
        },
        rejected: (error) => {
          if (typeof onRejected !== "function") {
            reject(error);
            return;
          }

          try {
            resolve(onRejected(error));
          } catch (err) {
            reject(err);
          }
        },
      });

      this._executeHandlers();
    });
  }

  _executeHandlers() {
    if (this.state === "pending") return;
    for (const handler of this.handlers) {
      queueMicrotask(() => {
        handler[this.state](this.result);
      });
    }

    this.handlers = [];
  }

  _resolve(value) {
    if (this.state !== "pending") return;
    if (value instanceof MyPromise) {
      value.then(this._resolve.bind(this), this._reject.bind(this));
      return;
    }

    this.state = "fulfilled";
    this.result = value;
    this._executeHandlers();
  }

  _reject(error) {
    if (this.state !== "pending") return;
    this.state = "rejected";
    this.result = error;
    this._executeHandlers();
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  static resolve(value) {
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }

  static reject(value) {
    return new MyPromise((resolve, reject) => {
      reject(value);
    });
  }
}
