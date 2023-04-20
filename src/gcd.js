import readlineSync from 'readline-sync';
function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return  gcd(b, a % b);
    }
  }
  export default function brainGcd() {
    console.log("Welcome to the Brain Games!");
    let name = readlineSync.question("May I have your name?");
    console.log(`Hello, ${name}!`);
    console.log("Find the greatest common divisor of given numbers.");
  for (let i = 0; i < 3; i++) {
      let num1 = Math.floor(Math.random() * 100) + 1;
      let num2 = Math.floor(Math.random() * 100) + 1;
      let correctAnswer = gcd(num1, num2);
      let answer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer:`);
     if (parseInt(answer) === correctAnswer) {
        console.log("Correct!");
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
   console.log(`Congratulations, ${name}!`);
  }


  
 



