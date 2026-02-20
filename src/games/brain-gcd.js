import { generateNumber, playGame } from '../index.js'

const runBrainGcd = () => {
  playGame('Find the greatest common divisor of given numbers.', generateRoundData)
}

const generateRoundData = () => {
  const number1 = generateNumber()
  const number2 = generateNumber()
  const question = `${number1} ${number2}`
  const correctAnswer = getCorrectAnswer(number1, number2)
  return [question, correctAnswer]
}

const getCorrectAnswer = (number1, number2) => {
  let num1 = number1
  let num2 = number2
  if (num2 === 0) {
    return num1
  }
  while (num2 !== 0) {
    const temp = num1 % num2
    num1 = num2
    num2 = temp
  }
  return num1.toString()
}

export default runBrainGcd
