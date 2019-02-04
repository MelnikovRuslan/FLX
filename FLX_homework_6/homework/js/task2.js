let price = validInput(Number(prompt("Pleace enter price", 0)));
let discount = validInput(Number(prompt("Pleace enter discount", 0)));
let priceWithDiscaunt = 0;

function validInput(num){
	while(isNaN(num)){
		alert("Invalid input data");
		num = Number(prompt(`Please enter value again`, 0));
    }
    return ~~(num*100)/100;  
}

if(price < 0 || price > 9999999 || discount < 0 || discount > 100){
	alert("Invalid input data");
} else {
	calculateDiscount();
}

function calculateDiscount(){
	priceWithDiscaunt = `Price without discount: ${price}\nDiscount: ${discount}%\n`;
	let saved = ~~((price*discount)/100)*100/100;
	let priceWithDis = ~~((price - saved) * 100) / 100;
	priceWithDiscaunt = priceWithDiscaunt + `Price with discount: ${priceWithDis}\nSaved: ${saved}`;
	alert(priceWithDiscaunt);
}