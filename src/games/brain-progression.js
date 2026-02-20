import { generateNumber, playGame } from '../index.js'

const runBrainProgression = () => {
  playGame('What number is missing in the progression?', generateRoundData)
}

const generateRoundData = () => {
  const result = []
  let correctAnswer = null
  const length = generateNumber(5, 10)
  const questionIndex = generateNumber(1, length)
  const startNumber = generateNumber(1, 20)
  const index = generateNumber(1, 10)
  for (let step = 1; step <= length; step += 1) {
    const number = startNumber + index * step
    if (step === questionIndex) {
      correctAnswer = number.toString()
      result.push('..')
    }
    else {
      result.push(number)
    }
  }
  const resultString = result.join(' ')
  return [resultString, correctAnswer]
}

export default runBrainProgression
