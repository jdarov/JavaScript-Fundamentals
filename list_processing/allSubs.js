function leadingSubstrings(str) {
  const leadingSubs = [];

  for (let i = 0; i < str.length; i++) {
    leadingSubs.push(str.slice(0, i + 1));
  }

  return leadingSubs;
}

function substrings(str) {
  return [...str].flatMap((_, i) => leadingSubstrings(str.slice(i)));
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]