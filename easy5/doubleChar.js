
const VOWELS = {
  a,
  e,
  i,
  o,
  u,
}
function isVowel(char) {
  return char.toLowerCase() in VOWELS;
}
function doubleConsonants(str) {
  return [...str].reduce((acc, char) => acc + (isVowel(char) ? char: char.repeat(2)), '');
}
function repeater(str) {
  return [...str].reduce((acc, char) => acc + char.repeat(2), '');
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));