function octalToDecimal(num) {
  return [...num].reverse().reduce((decimal, digit, idx) => decimal + (Number(digit) * (Math.pow(8, idx))), 0);
}

console.log(octalToDecimal('1'));
console.log(octalToDecimal('10'));
console.log(octalToDecimal('130'));
console.log(octalToDecimal('17'));
console.log(octalToDecimal('2047'));
console.log(octalToDecimal('011'));