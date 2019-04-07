let rulesModal = document.getElementById('rules-modal');
let rulesBtn = document.getElementById('modalBtn');
let rulesClose = document.getElementById('close');

let rulesRead = document.getElementById('play');
let moveMessage = document.querySelector('.move-message');
let userScoreSpan = document.getElementById('user-score');

let compScoreSpan = document.getElementById('comp-score');
let reset = document.getElementById('reset');
let hands = document.querySelectorAll('.choice');

let userScore = 0;
let computerScore = 0;
let round = 1;

let obj = {
	rock: {wins: 'scissors', loses: 'paper'},
	paper: {wins: 'rock',	loses: 'scissors'},
	scissors: {wins: 'paper',	loses: 'rock'}
}

rulesBtn.addEventListener('click', showRules);
rulesClose.addEventListener('click', closeRules);
rulesRead.addEventListener('click', closeRules);
reset.addEventListener('click', restartGame);