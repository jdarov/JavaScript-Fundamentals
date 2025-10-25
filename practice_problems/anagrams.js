function anagram(word, list) {
  const sortWord = theWord => [...theWord].sort().join('');
  const sortedWord = sortWord(word);
  return list.filter(Word => sortWord(Word) === sortedWord);
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));