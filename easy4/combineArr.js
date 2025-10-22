function union(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];
  return [...new Set([...arr1, ...arr2])];
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9])