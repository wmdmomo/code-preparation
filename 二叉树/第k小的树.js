var kthSmallest = function (root, k) {
  let res = 0;
  check(root);
  return res;
  function check(root) {
    if (!root) return;
    check(root.left);
    if (k === 0) return;
    if (--k === 0) {
      res = root.val;
    }
    check(root.right);
  }
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
node1.right = node2;
node3.left = node1;
node3.right = node4;

kthSmallest(node3, 1);
