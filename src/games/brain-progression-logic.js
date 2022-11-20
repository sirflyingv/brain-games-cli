import readlineSync from 'readline-sync';

export const rulesStr = 'What number is missing in the progression?';

export const gameLogicProgression = (valueGenerator) => {
  const progLength = valueGenerator(10) + 5;
  const progStart = valueGenerator(15);
  const progStep = valueGenerator(5);
  const secretIndex = valueGenerator(progLength) - 1;
  const progression = [progStart];

  for (let i = 2; i <= progLength; i += 1) {
    progression.push(progression[i - 2] + progStep);
  }

  const questionStr = progression.map((el, i) => (i === secretIndex ? '..' : el)).join(' ');

  console.log(`Question: ${questionStr}`);

  const expectedAnswer = progression[secretIndex];
  const userAnswer = readlineSync.question('Your answer: ').trim();
  const isCorrect = Number(userAnswer) === expectedAnswer;

  return {
    isCorrect,
    userAnswer,
    expectedAnswer,
  };
};
