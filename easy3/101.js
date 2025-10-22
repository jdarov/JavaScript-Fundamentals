const rlSync = require('readline-sync');
const input = (inputPrompt) => rlSync.question(inputPrompt);

const integers = [];

for (let i = 1; i < 7; i++) {
  const suffix = i >= 4 ? 'th' : (i === 3 ? 'rd' : (i === 2 ? 'nd' : 'st'));
  const int = parseInt(input(`Enter the ${i === 6 ? 'last' : i}${i === 6 ? '' : suffix} number: `), 10);

  integers.push(int);
}

const finalInt = integers.pop();
const verb = integers.includes(finalInt) ? 'appears' : 'does not appear';

console.log(`The number ${finalInt} ${verb} in [${integers.join(', ')}]`);