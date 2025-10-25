const sequence = max => {
  const newArr = [];
  for (let i = 1; i <= max; i +=1) {
    newArr.push(i);
  }
  return newArr;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));