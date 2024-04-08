function ListNode(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node2.prev = node1;
node3.prev = node2;
// console.log(node1);
let head = node1;
head.prev = null;
head = head.next;

console.log(head);
