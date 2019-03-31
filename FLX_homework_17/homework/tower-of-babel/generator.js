const max = process.argv[2];
let FizzBuzz = function*(){
	let from = 1;
	while(from <= max){
		let num = from;
		if(from % 3 === 0 && from % 5 === 0) {
          num = 'FizzBuzz';
        } else if (from % 3 === 0) {
          num = 'Fizz';
        } else if (from % 5 === 0) {
          num = 'Buzz';
        }
        from++;
        yield num;
	}
}();

for(let n of FizzBuzz){
	console.log(n);
}