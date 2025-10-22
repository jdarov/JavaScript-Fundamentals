function wordSizes(text) {
  const wordSizes = {};

  if (text.length < 1) return {};

  const words = text.split(' ').map(word => word.replace(/[^a-zA-Z]/g, ''));
  words.forEach(word => {
    wordSizes[word.length] = (wordSizes[word.length] ?? 0) + 1;   
  });

  return wordSizes;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));