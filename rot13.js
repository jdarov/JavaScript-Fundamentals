function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  const count = new Map();
  for (const element of array1) count.set(element, (count.get(element) ?? 0) + 1);

  for (const element of array2) {
    const n = count.get(element);
    if (!n) return false;
    n === 1 ? count.delete(element) : count.set(element, n - 1);
  }
  return count.size === 0;
}


console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));
console.log(areArraysEqual([1, 1, 1], [1, 1]));
console.log(areArraysEqual([1, 1], [1, 1]));
console.log(areArraysEqual([1, '1'], ['1', 1]));