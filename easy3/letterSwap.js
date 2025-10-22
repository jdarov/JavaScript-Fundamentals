function swap(text) {
  const words = text.split(' ');

  const swapped = words.map(word => {
    if (word.length < 2) return word;

    return word.at(-1) + word.slice(1, -1) + word[0];
  })
  
  return swapped.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));