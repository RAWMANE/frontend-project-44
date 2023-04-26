import readlineSync from 'readline-sync'
function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

    console.log("Welcome to the Brain Games!");
    const name =  readlineSync.question("May I have your name? ");

    console.log(`Hello, ${name}!`);
    export default function brainPrime() {
    console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");
    for (let i = 0; i < 3; i++) {
      let number = Math.floor(Math.random() * 10) + 1;
      let correctAnswer = isPrime(number) ? 'yes' : 'no';
      let answer = readlineSync.question(`Question: ${number}\nYour answer:`).toLowerCase();
      if (answer === correctAnswer) {
        console.log("Correct!");
      } else {
        console.log(`'${answer}' is wrong answer;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
    console.log(`Congratulations, ${name}!`);
  }

