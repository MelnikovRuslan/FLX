function getMin(){
	let zeroIndex = 0;
	let minNumber = 0;
	for(let i = 0; i < arguments.length; i++){
		if(arguments[i] % 1 === 0){
			if(arguments[zeroIndex] > arguments[i]){
				minNumber = arguments[i];
			}
		} else {
			throw new TypeError(arguments[i] + ' is not integer number');
		}
	}
	return minNumber;
}

console.log(getMin(3, 0, -3));