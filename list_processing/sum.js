function sum(num) {
  return [...num.toString()].reduce((acc, val) => acc + Number(val), 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));