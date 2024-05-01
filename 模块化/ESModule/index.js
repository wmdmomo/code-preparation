import info, { age } from "./a.js";
console.log(info, info.name, info.hobbies, age); //William ["coding"]
//name 不会被模块内部的变化所影响
//hobbie 会被模块内部的变化所影响
//age 会被模块内部的变化所影响
setTimeout(() => {
  console.log(info.name, info.hobbies, age); //William ["coding", "writing"]
}, 500); //Yvette
