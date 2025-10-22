function interleave(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];
  const arr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    arr.push(arr1[i]);
    arr.push(arr2[i])
  }
  return arr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));