import random from '../utils/random.js';

export const rules = 'What is the result of the expression?';

const maxNumber = 20;

export const gameLogicCalc = () => {
  const num1 = random(maxNumber);
  const num2 = random(maxNumber);

  const operators = ['+', '-', '*'];
  const operator = operators[random(3) - 1];

  const question = `${num1} ${operator} ${num2}`;

  if (operator === '+') return [question, num1 + num2];
  if (operator === '-') return [question, num1 - num2];
  return [question, num1 * num2];
};
