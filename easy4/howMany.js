function countOccurrences(arr1) {
  const arr = [...arr1];
  return arr.reduce(
    (acc, val) => {
      acc[val] = (acc[val] ?? 0) + 1;
      return acc;
    }, {}
  );
}

const log = obj => {
  Object.entries(obj).sort((a,b) => b[1] - a[1])
  .forEach(
    ([key, val]) => {
      console.log(`${key} => ${val}`);
    }
  );
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

log(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1