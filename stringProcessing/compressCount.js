/*

PROBLEM:
Write a function compressConsecutive(string) that shortens a string by compressing consecutive identical characters
into a single character followed by the number of repetitions.

If a character appears only once, do not add a number.
Return the compressed string.

The comparison is case-sensitive → "A" and "a" are different characters.

You only compress consecutive duplicates, not all duplicates throughout the string.

e.g. "aabbaa" → "a2b2a2" (not "a4b2").

The input will always be a string (may be empty).

*/

/* 
C
  input: string
  output: new string

  explicit:
    return string with count of seperate consecutive letters
  implicit:
    empty str returns an empty str
    seperate consecutives count as seperate counts (eg aa2bb2aa2)
    case senstivie (H != h)
    if the count is 1 do NOT return a number
O
  see below
D
  str

  algo: 
    iterate through the string
    test each character
      if consecutive, increment counter by 1
      if not reset counter at 0 and start at new char
    at then end of the loop append to a new string that char with the count
    repeat
  fn:
    return count of consecutive letters
    build a string for each char appended to that count and then move to the next
    tests two characters for equality
E
*/

function compressConsecutive(str) {
  if (!str) return '';

  let countStr = '';
  let consecutiveCount = 1;
  [...str].forEach(
    (char, i) => {
      if (char === str[i + 1]) {
        consecutiveCount += 1;
      } else {
        countStr += consecutiveCount === 1 ? char : char + String(consecutiveCount);
        consecutiveCount = 1;
      }
    }
  );
  return countStr;
}


console.log(compressConsecutive("aaabbccccd") === 'a3b2c4d');     // "a3b2c4d"
console.log(compressConsecutive("abcd") === 'abcd');           // "abcd"
console.log(compressConsecutive("aabbaa") === 'a2b2a2');         // "a2b2a2"
console.log(compressConsecutive("") === '');               // ""
console.log(compressConsecutive("HHheeLLLooo") === 'H2he2L3o3');    // "H2h2e2L3o3"