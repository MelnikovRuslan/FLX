let rawArgs = process.argv.slice(2);
let args = [];

rawArgs.forEach(val => {
	let commaSep = val.split(',');
	commaSep.forEach(val => {
		if(val !== '') args.push(+val);
	});
});

function avg(...arr){
	return arr.reduce((prev, curr) => prev + curr)/arr.length;
}

console.log(avg(...args));