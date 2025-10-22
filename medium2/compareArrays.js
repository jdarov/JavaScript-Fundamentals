function matrixSums(arr) {
  let newArray = [];

  arr.forEach(arr => {
    newArray.push(arr.reduce((acc, val) => acc + val, 0))
  })

  return newArray;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]