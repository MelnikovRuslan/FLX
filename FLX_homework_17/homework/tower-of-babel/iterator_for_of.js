const max = process.argv[2];
let FizzBuzz = {
	[Symbol.iterator](){
		let from = 1;
		return {
			next(){
        let num = from;
        if(from % 3 === 0 && from % 5 === 0) {
          num = 'FizzBuzz';
        } else if (from % 3 === 0) {
          num = 'Fizz';
        } else if (from % 5 === 0) {
          num = 'Buzz';
        }
        if(from > max) {
          return {done: true};
        } else {
          from++;
          return {done: false, value: num}  
        }
			}
		}
	}
}

for(var n of FizzBuzz){
	console.log(n);
}