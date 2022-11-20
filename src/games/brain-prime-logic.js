import readlineSync from 'readline-sync';
// import { gcd } from 'mathjs';

export const rulesStr =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num % 2 === 0) return false;
  const s = Math.sqrt(num);
  for (let i = 2; i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const gameLogicPrime = (valueGenerator) => {
  const number = valueGenerator(300);

  console.log(`Question: ${number}`);

  const expectedAnswer = isPrime(number) ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ').trim();
  const isCorrect = userAnswer === expectedAnswer;

  return {
    isCorrect,
    userAnswer,
    expectedAnswer,
  };
};
