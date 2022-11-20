import readlineSync from 'readline-sync';

function greet() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

const createRandomNumber = (max) => Math.ceil(Math.random() * max);

function runGameRound(gameLogic, valueGenerator, playerName) {
  const gameResult = gameLogic(valueGenerator);

  const output = gameResult.isCorrect
    ? 'Correct!'
    : `'${gameResult.userAnswer}' is wrong answer ;(. Correct answer was '${gameResult.expectedAnswer}'.\nLet's try again, ${playerName}!`;

  console.log(output);
  return gameResult.isCorrect ? 1 : 0;
}

export default (gameLogic, rulesStr) => {
  const name = greet();
  console.log(rulesStr);

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const roundResult = runGameRound(gameLogic, createRandomNumber, name);
    if (roundResult === 0) return;
    correctAnswersCount += roundResult;
  }

  console.log(`Congratulations, ${name}!`);
  console.log(`
           ▄              ▄
          ▌▒█           ▄▀▒▌
          ▌▒▒█        ▄▀▒▒▒▐
         ▐▄█▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐
       ▄▄▀▒▒▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐
     ▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌
    ▐▒▒▒▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▌
    ▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐
   ▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌
   ▌░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌
  ▌▒▒▒▄██▄▒▒▒▒▒▒▒▒░░░░░░░░▒▒▒▐
  ▐▒▒▐▄█▄█▌▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▒▒▌
  ▐▒▒▐▀▐▀▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▐
   ▌▒▒▀▄▄▄▄▄▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▒▌
   ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒▒▄▒▒▐
    ▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒▄▒▒▒▒▌
      ▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀
        ▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀
           ▀▀▀▀▀▀▀▀▀▀▀▀
  `);
};
