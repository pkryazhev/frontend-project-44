import { generateNumber, playGame } from '../index.js'

const runBrainCalc = () => {
  playGame('What is the result of the expression?', generateRoundData)
}

const generateRoundData = () => {
  const number1 = generateNumber()
  const number2 = generateNumber()
  const sign = generateSign()
  const question = `${number1} ${sign} ${number2}`
  const correctAnswer = getCorrectAnswer(number1, number2, sign)
  return [question, correctAnswer]
}

const getCorrectAnswer = (number1, number2, sign) => {
  let result
  switch (sign) {
    case '+' :
      result = number1 + number2
      break
    case '-' :
      result = number1 - number2
      break
    case '*' :
      result = number1 * number2
      break
    default:
      console.log('Получен некорректный знак')
      break
  }
  return result.toString()
}

const generateSign = () => {
  const number = generateNumber(0, 2)
  const signs = ['+', '-', '*']
  return signs[number]
}

export default runBrainCalc
