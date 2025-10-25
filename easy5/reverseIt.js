function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));
console.log(reverseSentence('Hello World'));
console.log(reverseSentence('Reverse these words'));


function reverseWords(wordString) {
  const words = wordString.split(' ');

  return words.map(word => word.length >= 5 ? [...word].reverse().join('') : word).join(' ');
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));