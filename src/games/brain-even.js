import { generateNumber, getName, getAnswer, checkAnswer, printCongratulations } from '../index.js';

const runBrainEven = () => {
  const name = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = generateNumber();
    const answer = getAnswer(number);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(answer, correctAnswer, name)) {
      return;
    }
  }
  printCongratulations(name);
}

export default runBrainEven;