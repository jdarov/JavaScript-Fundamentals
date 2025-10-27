function buyFruit(fruits) {
  return fruits.reduce((acc, [fruit, num]) => {
    for (let i = 0; i < num; i++) {
      acc.push(fruit);
    }
    return acc;
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]