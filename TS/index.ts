interface Person {
  name: string;
  age: number;
  sex: string;
}
type Person1 = { name: string; age: number; sex: string };
// 过滤掉某些属性
type Person2 = Omit<Person, "name">;
// 挑选某些属性
type Person3 = Pick<Person, "name">;
// 把部分属性变成可选属性
type Person4 = Partial<Pick<Person, "age">>;
