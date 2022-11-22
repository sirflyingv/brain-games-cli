import createRandomNumber from '../utils/random.js';

export const rules = 'What number is missing in the progression?';

export const gameLogicProgression = () => {
  const progLength = createRandomNumber(10) + 5;
  const progStart = createRandomNumber(15);
  const progStep = createRandomNumber(5);
  const secretIndex = createRandomNumber(progLength) - 1;
  const progression = [progStart];

  for (let i = 2; i <= progLength; i += 1) {
    progression.push(progression[i - 2] + progStep);
  }

  const question = progression.map((el, i) => (i === secretIndex ? '..' : el)).join(' ');
  const expectedAnswer = String(progression[secretIndex]);

  return [question, expectedAnswer];
};
