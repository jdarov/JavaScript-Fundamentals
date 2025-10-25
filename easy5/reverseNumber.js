function reverseNumber(num) {
  if (!Number.isFinite(num)) return 0;
  
  return Number([...String(num)].reverse().join(''));
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));