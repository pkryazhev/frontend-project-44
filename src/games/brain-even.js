import { generateNumber, getName, getAnswer, checkAnswer, printCongratulations } from '../index.js';

const runBrainEven = () => {
  const name = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = generateNumber();
    const answer = getAnswer(number);
    const correctAnswer = isEven(number);
    if (!checkAnswer(answer, correctAnswer, name)) {
      return;
    }
  }
  printCongratulations(name);
}

const isEven = (number) => {
  return number % 2 === 0 ? 'yes' : 'no';
}

export default runBrainEven;