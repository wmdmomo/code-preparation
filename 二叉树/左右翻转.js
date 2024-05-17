var invertTree = function (root) {
  if (!root) return null;
  const queue = [root];
  while (queue.length) {
    const cur = queue.shift();
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
    const tmp = cur.left;
    cur.left = cur.right;
    cur.right = tmp;
  }

  return root;
};
function ListNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}
const node4 = new ListNode("4");
const node2 = new ListNode("2");
const node7 = new ListNode("7");
const node1 = new ListNode("1");
const node3 = new ListNode("3");
const node6 = new ListNode("6");
const node9 = new ListNode("9");

node2.left = node1;
node2.right = node3;
node7.left = node6;
node7.right = node9;
node4.left = node2;
node4.right = node7;
invertTree(node4);
