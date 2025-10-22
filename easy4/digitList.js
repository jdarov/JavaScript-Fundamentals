function digitList(digits) {
  return [...String(digits)].map(digit => Number(digit));
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));