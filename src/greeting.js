import greetingAndAskName from './cli.js';

const hello = (description = null) => {
  console.log('Welcome to the Brain Games!');
  const userName = greetingAndAskName();
  console.log(`Hello, ${userName}!`);
  if (description !== null) {
    console.log(description);
  }
  return userName;
};
export default hello;