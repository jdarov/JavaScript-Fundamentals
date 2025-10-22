const DIGITS = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

function integerToString(integer) {

  let digitString = '';
  let n = integer;

  do {
    const digit = integer % 10;
    digitString = DIGITS[digit] + digitString;
    n = Math.floor(n / 10);
  } while (n > 0);

  return digitString;
}

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));
