const upperLowerChar = (char, upper) => upper ? char.toUpperCase() : char.toLowerCase();
const isAlpha = char => /[a-z]/i.test(char);

function staggeredCase(str) {
  let upperCase = false;
  return [...str].map(char => {
    if (isAlpha(char)) upperCase = !upperCase; return upperLowerChar(char, upperCase);
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));