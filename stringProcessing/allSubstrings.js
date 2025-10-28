const leadingSubstrings = str => [...str].map((_, i) => str.slice(0, i + 1));

function allSubstrings(str) {
  return [...str].flatMap((_, i) => leadingSubstrings(str.slice(i)));
}

console.log(allSubstrings('aeiou'))