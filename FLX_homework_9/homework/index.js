//Task 1
function findTypes(){
	let types = [];
	for(let i = 0; i < arguments.length; i++){
		types.push(typeof arguments[i]);
	}
	return types;
}
console.log(findTypes('number'));
console.log(findTypes(null, 5, 'hello'));

//Task 2
function executeforEach(arr, fun){
	for(let i = 0; i < arr.length; i++){
		fun(arr[i]);
	}
}
executeforEach([1,2,3], function(el) {
	console.log(el);
}); 

//Task 3
function mapArray(arr, fun){
	let res = [];
	executeforEach(arr, function(el){
		res.push(fun(el));
	});
	return res;
}
console.log(mapArray([2, 5, 8], function(el) {
	return el + 3 
}));

//Task 4
function filterArray(arr, fun){
	let res = [];
	executeforEach(arr, function(el){
		if(fun(el)){
			res.push(el);
		}
	});
	return res;
}
console.log(filterArray([2, 5, 8], function(el) {
	return el > 3 
}));

//Task 5
function getAmountOfAdultPeople(data){
	let amount = 0;
	filterArray(data, function(el){
		if(el.age > 18){
			amount++;
		}
	});
	return amount;
}
let data = [{
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];
console.log(getAmountOfAdultPeople(data));

//Task 6
function getGreenAdultBananaLovers(data){
	let info = mapArray(filterArray(data, function(el){
		return el.age > 18 && el.favoriteFruit === 'banana';
	}), function(el){
		return el.name;
	});
	return info;
}
console.log(getGreenAdultBananaLovers(data));

//Task 7
function keys(obj){
	let keys = [];
	for(let key in obj){
		keys.push(key);
	}
	return keys;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

//Task 8
function values(obj){
	let values = [];
	for(let key in obj){
		values.push(obj[key]);
	}
	return values;
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));

//Task 9
function showFormattedDate(date){
	let shortMonth = date.toLocaleString('en-us', { month: 'short' });
	return `Date: ${date.getDate()} of ${shortMonth}, ${date.getFullYear()}`;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

//Task 10
function isEvenYear(date){
	if(date instanceof Date && date.getFullYear() % 2 === 0){
		return true;
	} else {
		return false;
	}
}
console.log(isEvenYear(new Date('2019-01-27T01:10:00')));

//Task 11
function isEvenMonth(date){
	if(date instanceof Date && (date.getMonth() + 1) % 2 === 0){
		return true;
	} else {
		return false;
	}
}
console.log(isEvenMonth(new Date('2019-02-27T01:10:00')));