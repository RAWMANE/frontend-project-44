import readlineSync from 'readline-sync'
  function generateProgression(start, diff, length) {
    let progression = [start];
    for (let i = 1; i < length; i++) {
      progression.push(start + diff * i);
    }
    return progression;
  }
   function hideRandomNumber(progression) {
    let hiddenIndex = Math.floor(Math.random() * progression.length);
    let hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = "..";
    return { progression, hiddenValue };
  }
  export default function brainProgression() {
    console.log("Welcome to the Brain Games!");
    let name =  readlineSync.question("May I have your name?");
    console.log(`Hello, ${name}!`);
    console.log("What number is missing in the progression?");
    for (let i = 0; i < 3; i++) {
      let start = Math.floor(Math.random() * 50) + 1;
      let diff = Math.floor(Math.random() * 10) + 1;
      let length = Math.floor(Math.random() * 6) + 5;
      let { progression, hiddenValue } = hideRandomNumber(generateProgression(start, diff, length));
      let correctAnswer = hiddenValue;
      let answer = readlineSync.question(`Question: ${progression.join(" ")}\nYour answer:`);
  
      if (parseInt(answer) === correctAnswer) {
        console.log("Correct!");
      } else {
        console.log(`'${answer}' is wrong answer;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
  
    console.log(`Congratulations, ${name}!`);
  }