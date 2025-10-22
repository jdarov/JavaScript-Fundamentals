function signedIntegerToString (integer) {
  if (integer < 0) return '-' + integerToString(-integer);
  if (integer > 0) return '+' + integerToString(integer);
  return '0';
};

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
    const digit = n % 10;
    digitString = DIGITS[digit] + digitString;
    n = Math.floor(n / 10);
  } while (n > 0);

  return digitString;
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));

