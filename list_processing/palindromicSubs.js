const isPalindrome = str => str.length > 1 && str === [...str].reverse().join('');

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

function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}


console.log(palindromes('abcd'));
console.log(palindromes('madam'));

console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// // returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]