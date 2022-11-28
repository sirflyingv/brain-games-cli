import random from '../utils/random.js';

export const rules = 'What number is missing in the progression?';

const config = {
  minLength: 5,
  lengthSpread: 10,
  maxStartValue: 15,
  maxStep: 5,
};

export const generateBrainProgressionGameRoundData = () => {
  const progLength = random(config.lengthSpread) + config.minLength;
  const progStart = random(config.maxStartValue);
  const progStep = random(config.maxStep);
  const secretIndex = random(progLength) - 1;
  const progression = [progStart];

  for (let i = 2; i <= progLength; i += 1) {
    progression.push(progression[i - 2] + progStep);
  }

  const question = progression.map((el, i) => (i === secretIndex ? '..' : el)).join(' ');
  const expectedAnswer = progression[secretIndex];

  return [question, expectedAnswer];
};
