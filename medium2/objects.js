let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));
console.log(wins);
console.log(incrementProperty(wins, 'lucy'));
console.log(wins);

function incrementProperty(obj, str) {
  obj[str] = (obj[str] || 0) + 1;
  return obj[str];
}

function objectHasProperty(obj, str) {
  let keys = Object.keys(obj);
  return keys.indexOf(str) !== -1;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));
console.log(objectHasProperty(pets, 'lizard'));
console.log(objectHasProperty(pets, 'mice'));

function copyProperties(obj1, obj2) {
  Object.assign(obj2, obj1);
  return Object.keys(obj2).length;
}
let hal = { 
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));
console.log(sal);

function wordCount(str) {
  if (!str.trim()) return {};

  const words = str.toLowerCase().trim().split(/\s+/);
  const obj = {};

  words.forEach(word => obj[word] = (obj[word] ?? 0) + 1);
  return obj;
}
console.log(wordCount('box car cat bag box'));
console.log(wordCount('   '));