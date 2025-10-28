function wordCap(str) {
  return str.split(/\s+/).map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));