let age = "b原始";

export { age };
age = "b的值";
import * as a from "./a.js";
console.log("b file a name", a);
