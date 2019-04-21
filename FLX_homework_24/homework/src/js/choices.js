import { removeListeners } from './listeners';
import { showScore } from './score';
import { hands, obj, moveMessage, score } from './variables';

export function userChoice(e) {
	if(e.target.className === hands[0].className) {
		e.target.style.backgroundColor = '#031B71';
		removeListeners();
		compChoice(e.target.id);
	} else if(e.target.parentElement.className === hands[0].className){
		e.target.parentElement.style.backgroundColor = '#031B71';
		removeListeners();
		compChoice(e.target.parentElement.id);
	}
}

export function compChoice(userChoice) {
	let n = Math.floor(Math.random() * 3);
	let compChoice = hands[n];
	compChoice.style.backgroundColor = 'red';
	checkChoice(userChoice, compChoice);
}

export function checkChoice(userChoice, compChoice) {
	if(obj[userChoice].wins === compChoice.id) {
		score.userScore += 1;
	} else if(obj[compChoice.id].wins === userChoice) {
		score.computerScore += 1;
	}
	moveMessage.textContent = `Round ${score.round}, ${userChoice} vs ${compChoice.id}`;
	score.round +=1;
	showScore(score.userScore, score.computerScore);
}