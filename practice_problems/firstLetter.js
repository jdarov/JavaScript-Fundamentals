const names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

const countFirst = Object.keys(names.map(name => name[0]).reduce((acc, val) => {
  acc[val] = (acc[val] ?? 0) + 1;
  return acc;
}, {}));

console.log(countFirst);

