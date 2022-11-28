import random from '../utils/random.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const maxNumber = 20;

const isEven = (number) => Math.abs(number % 2 === 0);

export const generateBrainEvenGameRoundData = () => {
  const number = random(maxNumber);
  const question = String(number);
  const expectedAnswer = isEven(number) ? 'yes' : 'no';

  return [question, expectedAnswer];
};
