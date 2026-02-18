import { generateNumber, getName, checkAnswer, getAnswer, printCongratulations } from '../index.js'

const runBrainGcd = () => {
  const name = getName()
  console.log('Find the greatest common divisor of given numbers.')
  for (let i = 0; i < 3; i += 1) {
    const number1 = generateNumber()
    const number2 = generateNumber()
    const question = `${number1} ${number2}`
    const answer = getAnswer(question)
    const correctAnswer = getCorrectAnswer(number1, number2)
    if (!checkAnswer(answer, correctAnswer, name)) {
      return
    }
  }
  printCongratulations(name)
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
