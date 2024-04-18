// https://medium.com/@fengyu214/understanding-work-loop-in-react-c47b64abf636
var node2 = {
  val: 2,
  siblingNode: null,
};
var node3 = {
  val: 3,
  childNode: null,
  returnNode: node2,
  siblingNode: null,
};
var node4 = {
  val: 4,
};

var node1 = {
  val: 1,
  childNode: node2,
  returnNode: null,
  siblingNode: null,
};
node2.childNode = node3;
node2.returnNode = node1;
node3.siblingNode = node4;
node4.returnNode = node2;
traverse(node1);
function traverse(node) {
  // TODO
  let workInProgress = node;
  let res = [];
  while (workInProgress) {
    performUnitWork();
  }

  function performUnitWork() {
    let next = beginWork(workInProgress);
    if (!next) {
      completeWork(workInProgress);
    } else {
      workInProgress = next;
    }
  }

  function beginWork(unitWork) {
    res.push(unitWork.val);
    return unitWork.childNode;
  }

  function completeWork(unitWork) {
    while (unitWork) {
      res.push(unitWork.val);
      if (unitWork.siblingNode) {
        workInProgress = unitWork.siblingNode;
        return;
      }
      unitWork = unitWork.returnNode;
      workInProgress = unitWork;
    }
  }
  console.log(res);
}
