import { userChoice } from './choices';
import { hands } from './variables'

export function addListeners() {
	for(let i = 0; i < hands.length; i++){
		hands[i].addEventListener('click', userChoice);
	}
}

export function removeListeners() {
	for(let i = 0; i < hands.length; i++){
		hands[i].removeEventListener('click', userChoice);
	}
}