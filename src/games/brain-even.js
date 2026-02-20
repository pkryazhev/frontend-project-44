import { playGame, generateNumber } from '../index.js'

const runBrainEven = () => {
  playGame('Answer "yes" if the number is even, otherwise answer "no".', generateRoundData)
}

const generateRoundData = () => {
  const questionData = generateNumber()
  const correctAnswer = isEven(questionData)
  return [questionData, correctAnswer]
}

const isEven = (number) => {
  return number % 2 === 0 ? 'yes' : 'no'
}

export default runBrainEven
