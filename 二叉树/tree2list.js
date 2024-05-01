const data = [
  {
    id: "1",
    name: "父节点1",
    children: [
      {
        id: "1-1",
        name: "子节点1-1",
        children: [
          {
            id: "1-1-1",
            name: "子节点1-1-1",
          },
          {
            id: "1-1-2",
            name: "子节点1-1-2",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "父节点2",
    children: [
      {
        id: "2-1",
        name: "子节点2-1",
      },
    ],
  },
];
function treeToList(data, parentId) {
  let result = [];
  data.forEach((item) => {
    const { children, ...otherItem } = item;
    result.push({ ...otherItem, parentId: parentId ?? item.id });
    if (children) {
      result = result.concat(treeToList(children, item.id));
    }
  });
  return result;
}
let listData = treeToList(data, null);
console.log(listData);
function listToTree(list) {
  let result = [];
  const map = {};
  for (let item of list) {
    const { id, parentId } = item;
    if (!map[id]) {
      map[id] = {};
    }
    //子节点是遍历到它的子序列加入的，现在遍历到它自己，所以更新它的item
    map[id] = { ...item, ...map[id] };
    if (parentId === id) {
      result.push(map[id]);
    } else {
      // 只有在这里的时候 才会对parent中的map 新增children
      if (!map[parentId]) {
        map[parentId] = {};
      }
      if (!map[parentId].children) {
        map[parentId].children = [];
      }
      map[parentId].children.push(map[id]);
    }
  }
  console.log(result);
}
listToTree(listData);
