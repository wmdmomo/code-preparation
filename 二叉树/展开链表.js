var flatten = function (root) {
  let res = new ListNode(-1);
  let pre = res;
  function check(root) {
    if (!root) return;
    console.log(res);
    pre.right = new ListNode(root.val);
    pre.left = null;
    pre = pre.right;
    check(root.left);
    check(root.right);
  }
  check(root);
  return res.right;
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
const node6 = new ListNode("6");
node2.left = node3;
node2.right = node4;

node5.right = node6;

node1.left = node2;
node1.right = node5;
console.log(flatten(node1));
