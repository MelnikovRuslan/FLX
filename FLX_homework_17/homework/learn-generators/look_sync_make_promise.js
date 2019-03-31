function askFoo() {
	return new Promise(function (resolve, reject) {
		resolve('foo');
	});
}

function run(generator){
	var it = generator(go);
	
	function go(result) {
		if(!result.done){
			return result.value.then(function(res){
				return go(it.next(res));
			});
		}
	}
	go(it.next());
}

run(function*() {
	try {
		let foo = yield askFoo();
		console.log(foo);
	} catch(e) {
		console.log('Error' + e);
	}
});