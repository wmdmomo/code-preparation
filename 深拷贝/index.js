const isComplexType = (obj) => {
  return obj instanceof Object && typeof obj !== "function";
};
const deepCopy = (obj, hash = new WeakMap()) => {
  if (!isComplexType(obj)) {
    return obj;
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  const constructor = obj.constructor;
  let cloneObj;

  //   正则、日期
  if (/^(Date|RegExp)$/i.test(constructor.name)) {
    cloneObj = new constructor(obj);
    return cloneObj;
  }

  if (constructor.name === "Map") {
    cloneObj = new constructor();
    hash.set(obj, cloneObj);
    obj.forEach((value, key) => {
      cloneObj.set(key, deepCopy(value, hash));
    });
    return cloneObj;
  }

  if (constructor.name === "Set") {
    cloneObj = new constructor();
    hash.set(obj, cloneObj);
    obj.forEach((value) => {
      cloneObj.add(deepCopy(value, hash));
    });
    return cloneObj;
  }

  cloneObj = Array.isArray(obj) ? [] : {};
  hash.set(obj.cloneObj);

  for (let key of Reflect.ownKeys()) {
    cloneObj[key] = deepCopy(obj[key], hash);
  }
  return cloneObj;
};
