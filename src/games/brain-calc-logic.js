import readlineSync from 'readline-sync';

export const rulesStr = 'What is the result of the expression?';

export const gameLogicCalc = (valueGenerator) => {
  const num1 = valueGenerator();
  const num2 = valueGenerator();

  let expression = '';
  let expectedAnswer = 0;
  const operatorSeed = valueGenerator();

  if (operatorSeed <= 7) {
    expression = `${num1} + ${num2}`;
    expectedAnswer = num1 + num2;
  }
  if (operatorSeed > 7 && operatorSeed < 14) {
    expression = `${num1} - ${num2}`;
    expectedAnswer = num1 - num2;
  }
  if (operatorSeed >= 14) {
    expression = `${num1} * ${num2}`;
    expectedAnswer = num1 * num2;
  }

  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ').trim();
  const isCorrect = Number(userAnswer) === expectedAnswer;

  return {
    isCorrect,
    userAnswer,
    expectedAnswer,
  };
};
