import random from '../utils/random.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const maxNumber = 300;

export const generateBrainPrimeGameRoundData = () => {
  const number = random(maxNumber);

  const question = String(number);
  const expectedAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, expectedAnswer];
};
