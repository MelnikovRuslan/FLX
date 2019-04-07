let resetStage = ()=> {
	if(round <= 3){
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

let restartGame = ()=> {
	userScore = 0;
	computerScore = 0;
	round = 1;
	showScore(userScore, computerScore);
}

let gameEnd = ()=> {
	if(userScore > computerScore)	{
		moveMessage.textContent = 'USER WIN PLEASE RESTART GAME';
	}else if(userScore < computerScore){
		moveMessage.textContent = 'COMPUTER WIN PLEASE RESTART GAME';
	} else {
		moveMessage.textContent = 'A DRAW PLEASE RESTART GAME';
	}
}