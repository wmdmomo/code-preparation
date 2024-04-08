function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  // 走到left的前面一个节点
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }
  let rightNode = prev;
  // 从prev走到right节点
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }
  const leftNode = prev.next;
  const tail = rightNode.next;

  rightNode.next = null;
  prev.next = null;

  reverseList(leftNode);

  prev.next = rightNode;
  leftNode.next = tail;

  return dummy.next;
};

const reverseList = function (head) {
  let prev = null,
    cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

const node1 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node2;
console.log(reverseBetween(node1, 1, 2));
