function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var diameterOfBinaryTree = function (root) {
  var res = 0;
  check(root);
  return res;
  function check(root) {
    if (!root) return 0;
    var left = check(root.left);
    var right = check(root.right);
    res = Math.max(res, left + right);
    return Math.max(left, right) + 1;
  }
};
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
node1.left = node2;
console.log(diameterOfBinaryTree(node1));
