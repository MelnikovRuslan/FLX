'use strict';
var a = 5;
const b = process.argv[2];
if(a === 5) {
	let c = 4;
	const b = 8;

	console.log(c);
	console.log(b);
}

console.log(a);
console.log(b);
try{
	c = 1000;
} catch (e) {
	console.log(e);
}