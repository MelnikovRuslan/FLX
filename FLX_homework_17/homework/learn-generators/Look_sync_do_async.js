var fs = require('fs');

function run(generator) {
	var it = generator(go);

	function go(err, result){
		if(err) {
			return it.throw(err);
		}
		it.next(result);
	}
	go();
}

run(function* (done){
	try{
		let dirFiles = yield fs.readdir('NoNoNo', done);
		let firstFile = dirFiles[0];
	} catch(e) {
		console.log(null);
	}
});