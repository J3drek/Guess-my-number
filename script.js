'use strict';

let generateNumber = function (range) {
  return Math.trunc(Math.random() * range) + 1;
};

let secretNumber = generateNumber(20);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //When there's no input number(.guess is empty or .guess.value == '')
  if (!guess) {
    displayMessage('No number!');
  }

  //When input number = secretNumber(WIN)
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#34e300';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) highscore = score;
    document.querySelector(
      '.label-highscore'
    ).textContent = `🥇 Highscore: ${highscore}`;
  }

  //When input number is DIFFERENT from secretNumber
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#fc2403';
    }
  }
});

//Reseting game
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = generateNumber(20);
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
