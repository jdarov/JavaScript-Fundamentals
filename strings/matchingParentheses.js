function isBalanced(str) {
  const parenthesis = str.match(/[()]/g) || [];
  if (parenthesis.length < 1) return true;
  let count = 0;
  
  for (let char of parenthesis) {
    if (char === '(') count += 1;
    else if (char === ')') count -= 1;

    if (count < 0) return false;
  }

  return count === 0;
}

console.log(isBalanced('What (is) this?'));
console.log(isBalanced('What is) this?'));
console.log(isBalanced('What (is this?'));
console.log(isBalanced('((What) (is this))?'));
console.log(isBalanced('((What)) (is this))?'));
console.log(isBalanced('Hey!'));
console.log(isBalanced(')Hey!('));
console.log(isBalanced('What ((is))) up('));