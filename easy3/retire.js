const rlSync = require('readline-sync');
const input = (inputPrompt) => rlSync.question(inputPrompt);

const age = Number(input('What is your age? '));
const retirement = Number(input("At what age would you like to retire? "));
const retire = retirement - age;
const currentYear = 2025;

console.log(`It's ${currentYear}. You will retire in ${currentYear + retire}`);
console.log(`You have only ${retire} years of work to go!`)