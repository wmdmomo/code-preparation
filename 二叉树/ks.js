// 相当于一直读left
function changeTree(root, curRight) {
  let cur = root.left;
  if (!cur) return;
  const nextRight = cur.right;
  cur.right = curRight;
  changeTree(cur, nextRight);
}
function ListNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}
const nodeA = new ListNode("A");
const nodeB = new ListNode("B");
const nodeC = new ListNode("C");
const nodeD = new ListNode("D");
const nodeE = new ListNode("E");
const nodeF = new ListNode("F");
const nodeG = new ListNode("G");
nodeD.left = nodeF;
nodeD.right = nodeG;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeA.left = nodeB;
nodeA.right = nodeC;
const root = nodeA;
function test(root) {
  const right = root.right;
  root.right = null;
  changeTree(root, right);
  console.log(root);
}
// test(root);
changeTree2(root);
function changeTree2(root) {
  check(root, null);
  function check(root, nextNode) {
    if (!root) return;
    const _nextNode = root.right;
    root.right = nextNode;
    check(root.left, _nextNode);
  }
  console.log(root);
}
