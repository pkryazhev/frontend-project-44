import { generateNumber, playGame } from '../index.js'

const runBrainPrime = () => {
  playGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateRoundData)
}

const generateRoundData = () => {
  const questionData = generateNumber()
  const correctAnswer = getCorrectAnswer(questionData)
  return [questionData, correctAnswer]
}

const getCorrectAnswer = (number) => {
  if (number < 2) {
    return 'no'
  }
  else if (number === 2) {
    return 'yes'
  }
  else if (number % 2 === 0) {
    return 'no'
  }
  else {
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        return 'no'
      }
    }
    return 'yes'
  }
}

export default runBrainPrime
