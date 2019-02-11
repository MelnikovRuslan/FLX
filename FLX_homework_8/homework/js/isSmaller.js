/*global isBigger:true*/
function isSmaller(a, b){
	let res = !isBigger(a, b);
	return res;	
}

console.log(isSmaller(5, -1));