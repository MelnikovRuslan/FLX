function reverseNumber(number){
	if(typeof number !== 'number' && number % 1 !== 0){
		throw new TypeError(number + ' is not integer number');
	}
	let result = '';
	let numberSign = number > 0 ? 1 : -1;
	number = number * numberSign;

	for(let i = 0; i < number;){
		result = result + number % 10;
		number = ~~(number / 10);	
	}
	result = result * numberSign;
	return result;
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456)); 
console.log(reverseNumber(10000)); 