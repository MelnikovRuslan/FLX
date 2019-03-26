function assign(receiver) {
	let obj = Object(receiver);
	for(let i = 1; i < arguments.length; i++){
		let next = arguments[i];
		let keys = Object.keys(arguments[i]);
		for(let j = 0; j < keys.length; j++){
			obj[keys[j]] = next[keys[j]];
		}
	}
	return obj;
}

let defaults = { a:123, b:777 };
let options = { a:456 };
let configs = assign({}, defaults, options); // {a: 456, b: 777}
console.log(configs);

let Bot = function(bot) {
	this.x = bot.x;
	this.y = bot.y;
	this.name = bot.name;
	this.speed = bot.speed;
	this.defaultValue = bot;
};

Bot.prototype.getSpeed = function() {
  return this.speed;
};

Bot.prototype.setSpeed = function(speed) {
	if(speed > 0 && Number.isInteger(speed)){
		this.speed = speed;	
	} else {
		console.log('Incorect Speed');
	}
};

Bot.prototype.defaultSpeed = function() {
  return this.defaultValue.speed;
};

Bot.prototype.getCoordinates = function() {
	return {x:this.x, y:this.y};
};

Bot.prototype.setCoordinates = function(x, y) {
	if(Number.isInteger(x) && Number.isInteger(y)){
		this.x = x;
		this.y = y;	
	} else {
		console.log('Incorect Coordinates');
	}
};

Bot.prototype.move = function(direction) {
	let coordinates = this.getCoordinates();
	let speed = this.getSpeed();
	switch(direction){
		case 'up': 
			this.setCoordinates(coordinates.x, coordinates.y + speed);
			break;
		case 'down':
			this.setCoordinates(coordinates.x, coordinates.y - speed); 
			break;
		case 'right':
			this.setCoordinates(coordinates.x + speed, coordinates.y);
			break;
		case 'left':
			this.setCoordinates(coordinates.x - speed, coordinates.y);
			break;
		default: console.log('Incorect Direction');
	}
};

Bot.prototype.showPosition = function() {
	console.log(`I am ${this.constructor.name} ${this.name}. I am located at ${this.x}:${this.y}.`);
};

let Racebot = function(bot) {
	Bot.call(this, bot);
	this.speedModify = {
		direction : 'none',
		speedIncrease : 0 
	}
};
Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;

Racebot.prototype.move = function(direction){
	let coordinates = this.getCoordinates();
	let speed = this.getSpeed();
	this.ispeedInc(direction);
	switch(direction){
		case 'up':
			this.setCoordinates(coordinates.x, coordinates.y + speed + this.speedModify.speedIncrease);
			break;
		case 'down':
			this.setCoordinates(coordinates.x, coordinates.y - speed - this.speedModify.speedIncrease);
			break;
		case 'right':
			this.setCoordinates(coordinates.x + speed + this.speedModify.speedIncrease, coordinates.y);
			break;
		case 'left':
			this.setCoordinates(coordinates.x - speed - this.speedModify.speedIncrease, coordinates.y);
			break;
		default: console.log('Incorect Direction');
	}
};

Racebot.prototype.ispeedInc = function(direction) {
	if(this.speedModify.direction === direction) {
		this.speedModify.speedIncrease += 1;
	} else {
		this.speedModify.direction = direction;
		this.speedModify.speedIncrease = 0;
	}
};

let Speedbot = function(bot) {
	Bot.call(this, bot);
};
Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;

Speedbot.prototype.move = function(direction){
	let coordinates = this.getCoordinates();
	let speed = this.getSpeed();
	switch(direction){
		case 'up':
			this.setCoordinates(coordinates.x, coordinates.y + speed);
			this.checkIncrease();
			break;
		case 'down':
			this.setCoordinates(coordinates.x, coordinates.y - speed); 
			this.checkIncrease();
			break;
		case 'right':
			this.setCoordinates(coordinates.x + speed, coordinates.y); 
			this.checkIncrease();
			break;
		case 'left':
			this.setCoordinates(coordinates.x - speed, coordinates.y);
			this.checkIncrease();
			break;
		default: console.log('Incorect Direction');
	}
};

Speedbot.prototype.prepareEngine = function(){
	this.setSpeed(this.getSpeed() + 2);
};

Speedbot.prototype.checkIncrease = function(){
	if(this.getSpeed() > this.defaultSpeed()){
		this.setSpeed(this.getSpeed() - 1);
	}
};

let Botty = new Bot({name:'Betty', speed:2, x:0, y:1});
Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:1.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:3.
Botty.move('left');
Botty.move('down');
Botty.move('up');
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:5.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:7.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:9.

let Zoom = new Racebot({name:'Lightning', speed:2, x:0, y:1});
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:1.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:3.
Zoom.move('left');
Zoom.move('down');
Zoom.move('up');
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:6.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:10.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:15.

let Broom = new Speedbot({name:'Thunder', speed:2, x:0, y:1});
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:1.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:3.
Broom.prepareEngine();
Broom.move('left');
Broom.move('down');
Broom.move('up');
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:4.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:6.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:8.
