import askName from './cli.js';

const greetings = (description = null) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  if (description !== null) {
    console.log(description);
  }
  return name;
};
export default greetings;
