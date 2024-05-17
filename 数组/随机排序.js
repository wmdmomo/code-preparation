function shuffleArray(array) {
  const len = array.length;
  //   Math.random() [0,1)
  for (let i = 0; i < len; i++) {
    const j = Math.floor(Math.random() * len);
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const arr = [3, 2, 6, 1, 4];
shuffleArray(arr);
console.log(arr);
