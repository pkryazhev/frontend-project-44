import { generateNumber, getName, checkAnswer, getAnswer, printCongratulations } from '../index.js';

const runBrainCalc = () => {
  const name = getName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = generateNumber();
    const number2 = generateNumber();
    const sign = generateSign();
    const question = `${number1} ${sign} ${number2}`;
    const answer = getAnswer(question);
    const correctAnswer = getCorrectAnswer(number1, number2, sign);
    if (!checkAnswer(answer, correctAnswer, name)) {
      return;
    }
  }
  printCongratulations(name);
}

const getCorrectAnswer = (number1, number2, sign) => {
  let result;
  switch (sign) {
    case '+' :
      result = number1 + number2;
      break;
    case '-' :
      result = number1 - number2;
      break;
    case '*' :
      result = number1 * number2;
      break;
    default: 
      console.log('Получен некорректный знак');
      break;
  }
  return result.toString();
}

const generateSign = () => {
  const number = generateNumber(1, 3);
  const signs = ['+', '-', '*'];
  return signs[number];
}

export default runBrainCalc;