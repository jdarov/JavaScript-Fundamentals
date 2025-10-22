function showMultiplicativeAverage(arr) {
  const mult = arr.reduce((acc, val) => acc * val, 1);
  const avg = mult / arr.length;

  return String(avg.toFixed(3));
}

console.log(showMultiplicativeAverage([3, 5]));
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));