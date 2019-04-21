import { restartGame } from './reset';
import { closeRules } from './rules';
import { showRules } from './rules';

export let rulesModal = document.getElementById('rules-modal');
export let rulesBtn = document.getElementById('modalBtn');
export let rulesClose = document.getElementById('close');

export let rulesRead = document.getElementById('play');
export let moveMessage = document.querySelector('.move-message');
export let userScoreSpan = document.getElementById('user-score');


export let compScoreSpan = document.getElementById('comp-score');
export let reset = document.getElementById('reset');
export let hands = document.querySelectorAll('.choice');

export let score = {userScore: 0, computerScore: 0, round: 1};

export let obj = {
	rock: {wins: 'scissors', loses: 'paper'},
	paper: {wins: 'rock',	loses: 'scissors'},
	scissors: {wins: 'paper',	loses: 'rock'}
}

rulesBtn.addEventListener('click', showRules);
rulesClose.addEventListener('click', closeRules);
rulesRead.addEventListener('click', closeRules);
reset.addEventListener('click', restartGame);