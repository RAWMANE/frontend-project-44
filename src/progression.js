import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
function generateProgression(start, diff, length) {
  const progression = [start];
  for (let i = 1; i < length; i += 1) {
    progression.push(start + diff * i);
  }
  return progression;
}
function hideRandomNumber(progression) {
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[hiddenIndex];
  // eslint-disable-next-line no-param-reassign
  progression[hiddenIndex] = '..';
  return { progression, hiddenValue };
}
export default function brainProgression() {
  for (let i = 0; i < 3; i += 0) {
    const start = Math.floor(Math.random() * 50) + 1;
    const diff = Math.floor(Math.random() * 10) + 1;
    const length = Math.floor(Math.random() * 6) + 5;
    const { progression, hiddenValue } = hideRandomNumber(generateProgression(start, diff, length));
    const correctAnswer = hiddenValue;
    const answer = readlineSync.question(`Question: ${progression.join(' ')}\nYour answer:`);

    // eslint-disable-next-line radix
    if (parseInt(answer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
