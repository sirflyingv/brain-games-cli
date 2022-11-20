import readlineSync from 'readline-sync';

export const rulesStr = 'Find the greatest common divisor of given numbers.';

// copypasta from w3school
const gcd = (num1, num2) => {
  const innerGcd = (x, y) => (!y ? x : gcd(y, x % y));
  return [num1, num2].reduce((a, b) => innerGcd(a, b));
};

export const gameLogicGCD = (valueGenerator) => {
  const num1 = valueGenerator(100);
  const num2 = valueGenerator(100);

  console.log(`Question: ${num1} ${num2}`);

  const expectedAnswer = gcd(num1, num2);
  const userAnswer = readlineSync.question('Your answer: ').trim();
  const isCorrect = Number(userAnswer) === expectedAnswer;

  return {
    isCorrect,
    userAnswer,
    expectedAnswer,
  };
};
