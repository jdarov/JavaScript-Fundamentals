function returnRandom(min, max) {
  if (min === max) return min;
  if (min > max) [min, max] = [max, min];

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(returnRandom(1, 20));
console.log(returnRandom(20, 1));
console.log(returnRandom(5, 5));