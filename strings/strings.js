const rlSync = require('readline-sync');
const userInput = inputPrompt => rlSync.question(inputPrompt);

const userName = userInput('What is your name? ');

userName.endsWith('!') ? console.log(`HELLO ${userName.replace(/\!/g, '').toUpperCase()}. WHY ARE YOU SCREAMING?`) : console.log(`Hello ${userName}`);