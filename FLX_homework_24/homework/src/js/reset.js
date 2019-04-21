import { addListeners } from './listeners';
import { showScore } from './score';
import { hands, score, moveMessage } from './variables'

export function resetStage() {
	if(score.round <= 3){
		setTimeout(function() {
			for(let i = 0; i < hands.length; i++){
				hands[i].style.backgroundColor = "";
			}
			moveMessage.textContent = `Make Your Move`;
			addListeners();
		}, 1600);
	} else {
		gameEnd();
	}
}

export function restartGame() {
	score.userScore = 0;
	score.computerScore = 0;
	score.round = 1;
	showScore(score.userScore, score.computerScore);
}

export function gameEnd() {
	if(score.userScore > score.computerScore)	{
		moveMessage.textContent = 'USER WIN PLEASE RESTART GAME';
	}else if(score.userScore < score.computerScore){
		moveMessage.textContent = 'COMPUTER WIN PLEASE RESTART GAME';
	} else {
		moveMessage.textContent = 'A DRAW PLEASE RESTART GAME';
	}
}