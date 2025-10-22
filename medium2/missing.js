const missing = arr => {
  if (arr.length < 2) return [];

  const allElements = [];

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] + 1 !== arr[idx + 1]) allElements.push(arr[idx]);
  }

  return allElements;
}

console.log(missing([-3, -2, 1, 5]));
console.log(missing([1, 2, 3, 4]));
console.log(missing([1, 5]));
console.log(missing([6]));