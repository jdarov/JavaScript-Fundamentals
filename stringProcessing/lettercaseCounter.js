function letterCaseCount(str) {
  const counts = { lowercase: 0, uppercase: 0, neither: 0 };

  for (const ch of str) {
    if (/[a-z]/.test(ch)) counts.lowercase += 1;
    else if (/[A-Z]/.test(ch)) counts.uppercase += 1;
    else counts.neither += 1;
  }
  return counts;
}


console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));