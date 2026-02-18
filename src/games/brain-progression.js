import { generateNumber, getName, checkAnswer, getAnswer, printCongratulations } from '../index.js';

const runBrainProgression = () => {
  const name = getName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = generateRoundData();
    const answer = getAnswer(question);
    if (!checkAnswer(answer, correctAnswer, name)) {
      return;
    }
  }
  printCongratulations(name);
}

const generateRoundData = () => {
  const result = [];
  let correctAnswer = null;
  const length = generateNumber(5, 10);
  const questionIndex = generateNumber(1, length);
  const startNumber = generateNumber(1, 20);
  const index = generateNumber(1, 10);
  for (let step = 1; step <= length; step += 1) {
    const number = startNumber + index * step;
    if (step === questionIndex) {
      correctAnswer = number.toString();
      result.push('..');
    }
    else {
      result.push(number);
    }
  }
  const resultString = result.join(' ');
  return [resultString, correctAnswer];
}

export default runBrainProgression;