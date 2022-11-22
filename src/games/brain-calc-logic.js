import createRandomNumber from '../utils/random.js';

export const rules = 'What is the result of the expression?';

export const gameLogicCalc = () => {
  const maxNumber = 20;
  const num1 = createRandomNumber(maxNumber);
  const num2 = createRandomNumber(maxNumber);

  const operators = ['+', '-', '*'];
  const operator = operators[createRandomNumber(3) - 1];

  const question = `${num1} ${operator} ${num2}`;

  // Is this a legitimate case to use the blasphemous eval() function?
  let expectedAnswer = 0;
  if (operator === '+') expectedAnswer = String(num1 + num2);
  if (operator === '-') expectedAnswer = String(num1 - num2);
  if (operator === '*') expectedAnswer = String(num1 * num2);

  return [question, expectedAnswer];
};
