function addOne(x) {
	return x+1;
}

function pipe(){
	let res = arguments[0];
	for(let i = 1; i < arguments.length; i++){
		if(typeof arguments[i] !== 'function'){
			throw new TypeError(arguments[i] + ' is not function');
		}
		res = arguments[i](res);
	}
	return res;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));

