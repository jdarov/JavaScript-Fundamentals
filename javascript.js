const substring = function(string, start, end) {
  const n = string.length;

  start = Number.isFinite(start) ? Math.trunc(start) : 0;
  end = (end === undefined) ? n : (Number.isFinite(end) ? Math.trunc(end) : 0);

  if (start < 0) start = 0;
  if (end < 0) end = 0;

  if (start > end) [start, end] = [end, start];

  if (start > n) start = n;
  if (end > n) end = n;

  let returnString = '';

  for (let i = start; i < end; i++) returnString += string[i];
  return returnString;
}
let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"