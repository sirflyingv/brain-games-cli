import random from '../utils/random.js';

export const rules = 'Find the greatest common divisor of given numbers.';

// copypasta from w3school
const gcd = (num1, num2) => {
  const innerGcd = (x, y) => (!y ? x : gcd(y, x % y));
  return [num1, num2].reduce((a, b) => innerGcd(a, b));
};

const maxNumber = 100;

export const gameLogicGCD = () => {
  const num1 = random(maxNumber);
  const num2 = random(maxNumber);

  const question = `${num1} ${num2}`;
  const expectedAnswer = String(gcd(num1, num2));

  return [question, expectedAnswer];
};
