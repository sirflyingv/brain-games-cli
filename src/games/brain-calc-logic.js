import random from '../utils/random.js';

export const rules = 'What is the result of the expression?';

const maxNumber = 20;

export const generateBrainCalcGameRoundData = () => {
  const num1 = random(maxNumber);
  const num2 = random(maxNumber);

  const operators = ['+', '-', '*'];
  const operator = operators[random(operators.length) - 1];

  const question = `${num1} ${operator} ${num2}`;

  switch (operator) {
    case '+':
      return [question, num1 + num2];

    case '-':
      return [question, num1 - num2];

    case '*':
      return [question, num1 * num2];

    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};
