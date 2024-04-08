const http = (index) => {
  console.log("http", index);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ index, data: "www" });
    }, Math.random() * 3000);
  });
};
const fun = (index) => {
  setTimeout(async () => {
    const res = await http(index);
    console.log("setTimeout", res);
    fun(index + 1);
  }, 1000);
};
// fun(0);

let index = 0;
setInterval(async () => {
  const res = await http(index++);
  console.log("setInterval", res);
}, 1000);
