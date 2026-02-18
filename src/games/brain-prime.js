import { generateNumber, getName, checkAnswer, getAnswer, printCongratulations } from '../index.js';

const runBrainPrime = () => {
  const name = getName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = generateNumber();
    const answer = getAnswer(number);
    const correctAnswer = getCorrectAnswer(number);
    if (!checkAnswer(answer, correctAnswer, name)) {
      return;
    }
  }
  printCongratulations(name);
}

const getCorrectAnswer = (number) => {
  if (number < 2) {
    return 'no';
  }
  else if (number === 2) {
    return 'yes';
  }
  else if (number % 2 === 0) {
    return 'no';
  }
  else {
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }
}

export default runBrainPrime;