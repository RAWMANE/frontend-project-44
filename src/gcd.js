import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
export default function brainGcd() {
  for (let i = 0; i < 3; i += 0) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = gcd(num1, num2);
    const answer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer:`);
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
