/*
Write a function that takes an array of integers as an argument 
and returns an array of two numbers that are closest together in value.
if there are multiple pairs that are equally close, return the pair that occurs
first in the original array. the order of the numbers in the returned array
should match their order in the original array
*/


/*
C
  input: array of nums
  outpute: array of nums by closeness

  explicit: 
    return a new array of two nums cloest in value from original array
    if multiple pairs, return the pair that comes first
  implicit:
    find the smallest difference between two numbers in an array
O
  see below
D
  array, ints

  algo:
    iterate through the array
      create an array of sub arrays
        each sub array is a set of nums in original array
    sort these arrays by their difference value
    return the first array of this sorted array
  fn:
    return a positive difference regardless of order
E
*/

const difference = (x, y) => Math.abs(x - y);

function subArrays(array) {
  const subArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      subArray.push([array[i], array[j]]);
    }
  }
  return subArray;
}

function closestNumbers(arr) {
  return subArrays(arr).sort((a, b) => difference(a[0], a[1]) - difference(b[0], b[1]))[0];
}

console.log(closestNumbers([5, 25, 15, 11, 20]));

console.log(JSON.stringify(closestNumbers([5, 25, 15, 11, 20])) === JSON.stringify([15, 11]));

console.log(JSON.stringify(closestNumbers([19, 25, 32, 4, 27, 16])) === JSON.stringify([25, 27]));

console.log(JSON.stringify(closestNumbers([1, 10, 5, 2, 8])) === JSON.stringify([1, 2]));

console.log(JSON.stringify(closestNumbers([1, 100, 89, 2, 88])) === JSON.stringify([1, 2]));
