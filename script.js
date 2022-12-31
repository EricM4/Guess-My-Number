'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber= Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

console.log(secretNumber);
const x =function(){
  console.log(23);
}
document.querySelector('.check').addEventListener('click', function() {


  const guess =Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

if(!guess){
  displayMessage('No Number!');

  //When there is no input
} else if (guess === secretNumber){
  displayMessage('Correct Number!');
  document.querySelector('.number').textContent= secretNumber;
  if(score > highscore){
   highscore=score;
   document.querySelector('.highscore').textContent = highscore;
  }
  document.querySelector('body').style.backgroundColor= '#60b347';
    document.querySelector('.number').style.width = '30rem';
  //When player wins

}else if(guess !== secretNumber){//When the guess is wrong

  if(score > 1){
    displayMessage(guess > secretNumber ?  'Too high!' : 'Too Low!');
    score--;
    document.querySelector('.score').textContent= score;

  } else{
    displayMessage('You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
}
});

document.querySelector('.again').addEventListener('click', function(){
  secretNumber = Math.trunc(Math.random() * 20)+1;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent='';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});