const cars = [
  {
    make: "audi",
    model: "r8",
    year: "2012",
  },
  {
    make: "audi",
    model: "rs5",
    year: "2013",
  },
  {
    make: "ford",
    model: "mustang",
    year: "2012",
  },
  {
    make: "ford",
    model: "fusion",
    year: "2015",
  },
  {
    make: "kia",
    model: "optima",
    year: "2012",
  },
];
// 得到以下结果
function groupByKey(list, key) {
  return list.reduce((acc, item) => {
    const itemKey = item[key];
    delete item[key];
    if (!acc[itemKey]) {
      acc[itemKey] = [item];
    } else {
      acc[itemKey].push(item);
    }
    return acc;
  }, {});
}

console.log(groupByKey(cars, "make"));
// const carsRes = {
//   audi: [
//     {
//       model: "r8",
//       year: "2012",
//     },
//     {
//       model: "rs5",
//       year: "2013",
//     },
//   ],

//   ford: [
//     {
//       model: "mustang",
//       year: "2012",
//     },
//     {
//       model: "fusion",
//       year: "2015",
//     },
//   ],

//   kia: [
//     {
//       model: "optima",
//       year: "2012",
//     },
//   ],
// };
