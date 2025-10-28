/*
C
  input: array of str
  output: sorted array of str

  explicit: 
    sort array by longest run of consonant letters
    should be in descending order (longest first to shortest)
    similar lengths should be kept in the same order
  implicit:
    empty array returns empty array
O
  see below
D
  arrays, strings

  algo:
    split array into seperate strings
    for each string in the array
      count the longest number of consecutive consonants
      return the count of that number
    sort the original array based on this number
  fn:
    check if a char is consonant or vowel
    count the longest set of consonants
E
*/

const isConsonant = char => /[^aeiou]/i.test(char);

function countConsonants(str) {
  let longestCount = 0;
  let currentCount = 0;

  for (const char of str) {
    if (isConsonant(char)) {
      currentCount += 1;
    } else {
      if (currentCount > longestCount) longestCount = currentCount;
      currentCount = 0;
    }
  }
  if (currentCount > longestCount) longestCount = currentCount;
  return longestCount;
}

const sortByConsonantCount = strArr => strArr.sort((a, b) => countConsonants(b) - countConsonants(a));



console.log(JSON.stringify(sortByConsonantCount(['aa', 'b', 'cc'])) === JSON.stringify(['cc', 'b', 'aa']));
// cc: 2, b: 1, aa: 0
console.log(JSON.stringify(sortByConsonantCount(['programming', 'is', 'fun'])) === JSON.stringify(['programming', 'is', 'fun']));
// programming: 2 (mm), is: 1 (s), fun: 1 (n) -> programming comes first, 'is' and 'fun' maintain original order

console.log(JSON.stringify(sortByConsonantCount(['apple', 'banana', 'cherry'])) === JSON.stringify(['apple', 'cherry', 'banana']));
// apple: 2 (pp), cherry: 2 (ch, rr), banana: 1 (b, n, n) -> 'apple' and 'cherry' maintain original order

console.log(JSON.stringify(sortByConsonantCount(['strength', 'zyxw', 'aeiou'])) === JSON.stringify(['strength', 'zyxw', 'aeiou']));
// strength: 4 (ngth), zyxw: 4 (zyxw), aeiou: 0 -> 'strength' and 'zyxw' maintain original order

console.log(JSON.stringify(sortByConsonantCount([])) === JSON.stringify([]))