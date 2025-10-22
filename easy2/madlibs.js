const rlSync = require('readline-sync');
const STORY = (noun, verb, adjective, adverb) => `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
const userInput = (inputPrompt) => rlSync.question(inputPrompt).trim();

function madlibs() {

  const answers = {
    noun : userInput('Enter a noun: '),
    verb : userInput('Enter a 0: '),
  }
  const noun = userInput('Enter a noun: ');
  const verb = userInput('Enter a verb: ');
  const adjective = userInput('Enter an adjective: ');
  const adverb = userInput('Enter an adverb: ');

  console.log(STORY(noun, verb, adjective, adverb));
}
madlibs();