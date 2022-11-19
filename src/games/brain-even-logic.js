import readlineSync from 'readline-sync';

export const rulesStr = 'Answer "yes" if number is even, otherise answer "no".';

export const gameLogicEven = (valueGenerator) => {
  const number = valueGenerator(20);
  console.log(`Question: ${number}`);

  const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ').trim();
  const isCorrect = userAnswer === expectedAnswer;

  return {
    isCorrect,
    userAnswer,
    expectedAnswer,
  };
};
