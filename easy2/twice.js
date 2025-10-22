const isDouble = (number) => {
  const s = String(number);
  if (s.length % 2 === 1) return false;

  const half = s.length / 2;

  const first = s.slice(0, half);
  const second = s.slice(half);

  return first === second;
}

const twice = (number) => isDouble(number) ? number : number * 2;

console.log(twice(37)); 
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));