function *flat(array){
	if(Array.isArray(array)) {
		for(let i = 0; i < array.length; i++) {
			yield* flat(array[i]);
		}
	} else {
		yield array;
	}
}

let A = [1, [2, [3, 4], 5], 6];
for(var f of flat(A)){
	console.log(f);
}