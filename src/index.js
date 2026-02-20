import readlineSync from 'readline-sync'
import { randomInt } from 'crypto'

export const generateNumber = (min = 1, max = 100) => {
  return randomInt(min, max + 1)
}

const getName = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}

export const getAnswer = (question) => {
  console.log(`Question: ${question}`)
  return readlineSync.question('Your answer: ')
}

export const checkAnswer = (answer, correctAnswer, name) => {
  if (answer === correctAnswer) {
    console.log('Correct!')
    return true
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${name}!`)
    return false
  }
}

export const printCongratulations = (name) => {
  console.log(`Congratulations, ${name}!`)
}

const printRules = (rules) => {
  console.log(rules)
}

const isRoundWon = (questionData, correctAnswer, name) => {
  const answer = getAnswer(questionData)
  return checkAnswer(answer, correctAnswer, name)
}

export const playGame = (rules, generateDataFunc) => {
  const name = getName()
  printRules(rules)
  for (let round = 1; round <= 3; round += 1) {
    const [questionData, correctAnswer] = generateDataFunc()
    if (!isRoundWon(questionData, correctAnswer, name)) {
      return
    }
  }
  printCongratulations(name)
}
