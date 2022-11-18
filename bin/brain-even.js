#!/usr/bin/env node
import readlineSync from 'readline-sync';

// variables and functions for game
let correctAnswersCount = 0;
const rulesStr = 'Answer "yes" if number is even, otherise answer "no".';

function greet() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function createRandomNunber() {
  return Math.ceil(Math.random() * 20);
}

function runGameRound(number, playerName) {
  console.log(`Question: ${number}`);
  const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';

  const userAnswer = readlineSync.question('Your answer: ').trim();
  const isCorrect = userAnswer === expectedAnswer;
  const output = isCorrect
    ? 'Correct!'
    : `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer} \n
    Let's try again, ${playerName}!'`;

  console.log(output);
  return isCorrect ? 1 : 0;
}

// Game start
const name = greet();
console.log(rulesStr);

while (correctAnswersCount < 3) {
  const questionNumber = createRandomNunber();
  correctAnswersCount += runGameRound(questionNumber, name);
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
