let userInfoPromise = null;

function getUserInfo() {
  if (!userInfoPromise) {
    console.log("hhhh");
    userInfoPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ user: "www" });
      }, 1000);
      //   try {
      //     const userInfo = await fetchUserInfoFromBackend(); // 向后端请求用户信息的函数
      //     resolve(userInfo);
      //   } catch (error) {
      //     reject(error);
      //   }
    });
  }
  return userInfoPromise;
}

// 模拟从后端获取用户信息的函数
async function fetchUserInfoFromBackend() {
  console.log("向后端发送请求");
  return new Promise((resolve) => {
    // 模拟异步请求延迟
    setTimeout(() => {
      const userInfo = { name: "John", age: 30, email: "john@example.com" };
      resolve(userInfo);
    }, 2000); // 这里假设请求耗时2秒
  });
}

getUserInfo();
getUserInfo();
getUserInfo();
