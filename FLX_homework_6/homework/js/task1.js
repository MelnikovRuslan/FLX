let a = validInput(Number(prompt("Please enter first (a) value", 1)), 0);
let b = validInput(Number(prompt("Please enter second (b) value", 1)), 1);
let c = validInput(Number(prompt("Please enter theerd (c) value", 1)), 2);

function validInput(num, i){
	let elements = ["first", "second", "third"];
	while(isNaN(num)){
		alert("Invalid input data");
		num = Number(prompt(`Please enter ${elements[i]} value again`, 1));
    }
    if(num === 0){
		return 1;
    }
    return num;  
}

(function () {
	let d = Math.pow(b, 2) - 4*a*c;
	if(d > 0){
		let x1 = (-1*b+Math.sqrt(d)) / (2*a);
		let x2 = (-1*b-Math.sqrt(d)) / (2*a);
		alert(`x1=${x1} and x2=${x2}`);
	} else if(d === 0){
		let x = -b/(2*a);
		alert(`x = ${x}`);
	}else if(d < 0){
		alert(`No solution`);
	}
})();
