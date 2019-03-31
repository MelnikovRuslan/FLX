function *factorial(n){
	let from = 1;
	let res = 1;
	while(from <= n){
		res *= from;
		yield res;
		from++;
	}
}


for(let n of factorial(5)){
	console.log(n);
}