function formatTime(time) {
	if(time < 0 || time % 1 !== 0){
		throw new TypeError(time + ' incorect data');
	}
	return `${~~(time/60/24)} day(s) ${~~(time/60%24)} hour(s) ${~~(time%60)} minute(s).`;
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));