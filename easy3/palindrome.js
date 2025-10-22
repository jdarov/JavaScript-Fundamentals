const isPalindrome = (text) => text === [...text].reverse().join('');

const isRealPalindrome = (text) => {
  const modifiedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');

  return isPalindrome(modifiedText);
}

const isPalindromicNumber = (number) => isPalindrome(number.toString());

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));