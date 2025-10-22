function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  return Math.floor(arr.reduce((acc, val) => acc + val, 0) / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));