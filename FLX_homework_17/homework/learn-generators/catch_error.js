function *upper(items) {
	let i = 0;
	while(i < items.length){
		try	{
			yield items[i].toUpperCase();
		} catch(error) {
			yield null;
		}
		i++;
	}
}

let bad_items = ['a', 'B', 1, 'c'];
for(let item of upper(bad_items)){
	console.log(item);
}