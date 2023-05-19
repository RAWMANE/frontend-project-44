import {
  askUserAnswer, isRightCheck, congratulations,
} from './helpers.js';
import greetings from './greeting.js';

function roundLogic(rule, description) {
  const name = greetings(description);
  let isRight = false;
  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = rule[i];
    console.log(`Question: ${question}`);
    const answer = askUserAnswer();
    isRight = isRightCheck(answer, rightAnswer, name);
    if (!isRight) {
      return null;
    }
  }
  return congratulations(name);
}

export default roundLogic;
