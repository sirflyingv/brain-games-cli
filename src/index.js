import readlineSync from 'readline-sync';

let correctAnswersCount = 0;

function greet() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function createRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

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

  while (correctAnswersCount < 3) {
    correctAnswersCount += runGameRound(gameLogic, createRandomNumber, name);
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
