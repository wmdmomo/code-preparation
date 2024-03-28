const map = new Map();
map.set("name", ["www", "mmm"]);
let names = map.get("name");
names = names.filter((n) => n !== "mmm");
console.log(map);
// 这里打出来的names 依旧是www mmm
