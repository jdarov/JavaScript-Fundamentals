function reverse(string) {
  return string.trim().split(/\s+/).reverse().join(' ');
}

console.log(reverse('hello'));
console.log(reverse('The quick brown fox'));