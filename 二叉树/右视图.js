var rightSideView = function (root) {
  if (!root) return [];
  const queue = [root];
  const res = [];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
      if (i === len - 1) {
        res.push(cur.val);
      }
    }
  }
  return res;
};
function ListNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}
const node3 = new ListNode("3");
const node1 = new ListNode("1");
const node4 = new ListNode("4");
const node2 = new ListNode("2");
const node5 = new ListNode("5");
node2.right = node5;
node3.right = node4;
node1.left = node2;
node1.right = node3;
rightSideView(node1);
