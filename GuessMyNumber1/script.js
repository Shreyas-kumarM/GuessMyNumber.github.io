'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'guess a number';
// console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ no number!!!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 correct number!!!';
      if (highScore < score) {
        document.querySelector('.highscore').textContent = score;
      } else {
        document.querySelector('.highscore').textContent = highScore;
      }
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    } else if (guess !== secretNumber) {
      score--;
      document.querySelector('.score').textContent = score;

      if (guess > secretNumber) {
        document.querySelector('.message').textContent = '📈 too high';
      } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '📉 too low';
      }
    }
  } else {
    document.querySelector('.message').textContent = '😭😭😭 You lost the game';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
