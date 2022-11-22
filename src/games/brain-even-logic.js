import createRandomNumber from '../utils/random.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const maxNumber = 20;

export const gameLogicEven = () => {
  const number = createRandomNumber(maxNumber);
  const question = String(number);
  const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';

  return [question, expectedAnswer];
};
