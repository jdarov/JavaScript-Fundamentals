const charSwapCase = char => /[a-zA-Z]/.test(char) ? (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()) : char;

function swapCase(str) {
  return [...str].map(charSwapCase).join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));