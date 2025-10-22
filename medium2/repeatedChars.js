const repeatedCharacters = function (str) {
  const stringArr = str.trim().toLowerCase().split('');

  const obj = {};

  stringArr.forEach(char => obj[char] = (obj[char] ?? 0) + 1);

  for (let char in obj) {
    if (obj[char] < 2) delete obj[char];
  }

  console.log(obj);
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }