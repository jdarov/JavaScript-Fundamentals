function centerOf(str) {
  if (typeof str !== 'string') return '';
  
  const mid = Math.round(str.length / 2) - 1;

  return str.length % 2 !== 0 ? str[mid] : str.slice(mid, mid + 2);
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));