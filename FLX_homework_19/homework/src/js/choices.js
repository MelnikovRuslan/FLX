let userChoice = (e)=> {
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

let compChoice = (userChoice)=> {
	let n = Math.floor(Math.random() * 3);
	let compChoice = hands[n];  
	compChoice.style.backgroundColor = 'red';
	checkChoice(userChoice, compChoice);
}

let checkChoice = (userChoice, compChoice)=> {
	if(obj[userChoice].wins === compChoice.id){
		userScore += 1;
	} else if(obj[compChoice.id].wins === userChoice){
		computerScore += 1;
	}
	moveMessage.textContent = `Round ${round}, ${userChoice} vs ${compChoice.id}`;
	round +=1;
	showScore(userScore, computerScore);
}