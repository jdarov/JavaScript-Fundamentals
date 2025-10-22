function runningTotal(arr) {
  if (arr.length < 1) return [];

  let total = 0;
  const totalArr = [];
  arr.forEach(element => { total += element; totalArr.push(total) });

  return totalArr;
}


console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));