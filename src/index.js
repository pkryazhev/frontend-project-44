import readlineSync from 'readline-sync';
import { randomInt } from "crypto";

export const generateNumber = (min = 1, max = 100) => {
  return randomInt(min, max + 1)
}

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: '); 
}

export const checkAnswer = (answer, correctAnswer, name) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
}

export const printCongratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
}