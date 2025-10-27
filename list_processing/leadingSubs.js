function leadingSubstrings(str) {
  const leadingSubs = [];

  for (let i = 0; i < str.length; i++) {
    leadingSubs.push(str.substring(0, i + 1));
  }

  return leadingSubs;
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));