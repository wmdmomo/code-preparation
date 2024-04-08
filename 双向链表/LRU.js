function ListNode(key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
}

// 双向链接 头尾节点 链表容量
function DoubleLink() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

DoubleLink.prototype.add = function (key, val) {
  // 在末尾添加上一个节点
  const newNode = new ListNode(key, val);
  if (this.size === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.size++;
  return newNode;
};

DoubleLink.prototype.remove = function (node) {
  if (this.size === 1 && node === this.head) {
    this.head = null;
    this.tail = null;
  } else if (node === this.head) {
    this.head = this.head.next;
    this.head.prev = null;
  } else if (node === this.tail) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  this.size--;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.doubleLink = new DoubleLink();
  this.capacity = capacity;
  // 这个map存在的key和node
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map.get(key);
  if (node) {
    this.doubleLink.remove(node);
    this.map.set(key, this.doubleLink.add(key, node.val));
    return node.val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = this.map.get(key);
  if (node) {
    this.doubleLink.remove(node);
  }
  this.map.set(key, this.doubleLink.add(key, value));
  if (this.capacity < this.doubleLink.size) {
    // remove第一个头节点
    const head = this.doubleLink.head;
    this.doubleLink.remove(head);
    this.map.delete(head.key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var obj = new LRUCache(1);
obj.put(2, 1);
obj.put(2, 2);
console.log(obj.get(2));
obj.put(1, 1);
obj.put(4, 1);
console.log(obj.get(2));
