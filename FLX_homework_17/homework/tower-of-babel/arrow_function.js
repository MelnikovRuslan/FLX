let inputs = process.argv.slice(2);
let result = inputs.map((word) =>
	word.charAt(0).toUpperCase()
).reduce((prev, curr) =>
	prev + curr
);
console.log(result);