function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
node1.left = node2;
node1.right = node4;
node2.left = node3;
const preOrder = (root) => {
  const res = [];
  check(root);
  console.log(res);
  function check(root) {
    if (!root) return;
    res.push(root.val);
    check(root.left);
    check(root.right);
  }
};
// preOrder(node1);
const middleOrder = (root) => {
  const res = [];
  check(root);
  console.log(res);
  function check(root) {
    if (!root) return;
    check(root.left);
    res.push(root.val);
    check(root.right);
  }
};
// middleOrder(node1);
const postOrder = (root) => {
  const res = [];
  check(root);
  console.log(res);
  function check(root) {
    if (!root) return;
    check(root.left);
    check(root.right);
    res.push(root.val);
  }
};
// postOrder(node1);
const levelOrder = (root) => {
  const queue = [root];
  const res = [];

  while (queue.length) {
    const tmp = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      tmp.push(cur.val);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    res.push(tmp);
  }
  console.log(res);
};
// levelOrder(node1);
const preOrder2 = (root) => {
  const stack = [root];
  let cur;
  const res = [];
  while (stack.length) {
    cur = stack.pop();
    res.push(cur.val);
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  console.log(res);
};
// preOrder2(node1);
const inOrder2 = (root) => {
  const stack = [],
    res = [];
  let cur = root;
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  console.log(res);
};
inOrder2(node1);
