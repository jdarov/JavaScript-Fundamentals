function sequence(count, start) {
  if (!count || !Number.isFinite(start)) return [];

  return Array.from({length: count}, (_, i) => (i + 1) * start);
}


console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 1000000));