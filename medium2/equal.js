const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

function equalObj(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function testObjEquality(obj1, obj2) {
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) return false;
    }
  }
  return true;
}
console.log(equalObj(person, otherPerson));
console.log(testObjEquality(otherPerson, person))