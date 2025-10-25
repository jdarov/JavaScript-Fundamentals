function myOwnEvery(array, func) {
  for (let val of array) {
    if (!func(val)) return false;
  }
  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true