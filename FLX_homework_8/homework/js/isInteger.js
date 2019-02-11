function isInteger(number){
	if(typeof number === 'number'){
		return number % 1 === 0;	
	}
	return false;
}

console.log(isInteger(5));
console.log(isInteger(5.1));
