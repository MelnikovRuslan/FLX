let addListeners = ()=> {
	for(let i = 0; i < hands.length; i++){
		hands[i].addEventListener('click', userChoice);
	}
}

let removeListeners = ()=> {
	for(let i = 0; i < hands.length; i++){
		hands[i].removeEventListener('click', userChoice);
	}
}