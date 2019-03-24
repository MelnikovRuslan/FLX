function Company(company){
	this.company = company;
	let def_value = {
		init_value : 0,
		reduce_one : 1,
		round : 2
	}
	let _employees = new Array();
	let _logs = [`${this.company.name} was created in ${new Date()}`];

	if(!this.company.name || !this.company.owner || !this.company.maxCompanySize) {
		throw new TypeError('Incorrect input company data');
	}

	this.addNewEmployee = function(employee) {
		if(employee instanceof Employee) {
			if(_employees.length < this.company.maxCompanySize) {
				_employees.push(employee);
				_logs.push(`${employee.employeeInfo.name} starts working at ${this.company.name} in ${new Date()}`);
				employee.employeeInfo.id = setIndex();
				employee.hire(this.company.name);
			} else {
				this.removeEmployee(lowestSalary().employeeInfo.id);
				this.addNewEmployee(employee);
			}
		} else {
			throw new TypeError(employee + ' is not employee object');
		}
	}

	this.removeEmployee = function(employeeID) {
		if(employeeID <= _employees.length - def_value.reduce_one && typeof employeeID === 'number') {
			for(let i = 0; i < _employees.length; i++){
				if(_employees[i].employeeInfo.id === employeeID){
					_employees[i].fire();
					_logs.push(_employees[i].employeeInfo.name + ' ends working at ' 
						+ this.company.name + ' in ' + new Date());
					_employees.splice(i, def_value.reduce_one);
				}
			}
		} else {
			throw new TypeError('Incorect employee ID');
		}
	}

	this.getEmployees = function(){
		let employeesList = new Array();
		for(let i = 0; i < _employees.length; i++){
			employeesList.push(_employees[i].employeeInfo);
		}
		return employeesList;
	}

	this.getFormattedListOfEmployees = function(){
		let formattedList = new Array();
		for(let i = 0; i < _employees.length; i++){
			formattedList.push(_employees[i].employeeInfo.name + ' works in '
				+ _employees[i].company + ' ' + _employees[i].calcTime() + ' seconds');
		}
		return formattedList;
	}

	this.getAvarageSalary = function(){
		return parseFloat((_employees.reduce(function (accumulator, currentValue) {
			return accumulator + currentValue.employeeInfo.salary;
		}, def_value.init_value) / _employees.length).toFixed(def_value.round));
	}

	this.getAvarageAge = function(){
		return parseFloat((_employees.reduce(function (accumulator, currentValue) {
			return accumulator + currentValue.employeeInfo.age;
		}, def_value.init_value) / _employees.length).toFixed(def_value.round));
	}

	this.getHistory = function() {
		return _logs;
	}

	let setIndex = function(){
		for(let i = 0; i < _employees.length; i++) {
			if(!_employees.some(function(employee) {
				return employee.employeeInfo.id === i;
			})) {
				return i;
			}
		}
	}

	let lowestSalary = function(){
		return _employees.reduce(function(prev, curr) {	
			return prev.employeeInfo.salary <= curr.employeeInfo.salary ? prev : curr;
		});
	}
}

function Employee(employee) {
	this.employeeInfo = employee;
	let _history = new Array();
	let _workTime = 0;
	let _workFrom = 0;
	this.def = {
		_ms : 1000,
		round : 2
	}

	if(!this.employeeInfo.name || !this.employeeInfo.age 
		|| !this.employeeInfo.salary || !this.employeeInfo.primarySkill) {
		throw new TypeError('Incorrect input employee data');
	}

	this.getSalary = function() {
		return this.employeeInfo.salary;
	}

	this.setSalary = function(salery) {
		if(typeof salery === 'number' && isFinite(salery)){
			let newSalery = parseFloat(salery.toFixed(this.def.round));
			if(newSalery > this.employeeInfo.salary){
				_history.push(`Change salary from ${this.employeeInfo.salary} to ${newSalery}`);
				this.employeeInfo.salary = newSalery;
			} else {
				_history.push(`try to change salary from ${this.employeeInfo.salary} to ${newSalery}`);
			}
		} else {
			throw new TypeError('Incorrect salery');
		}
	}

	this.hire = function(company) {
		if(company) {
			this.company = company;
			_workFrom = new Date();
			_history.push(`${this.employeeInfo.name} is hired to ${company} in ${new Date()}`);
		} else {
			throw new TypeError('Incorrect company name');
		}
	}

	this.fire = function(){
		_workTime += this.calcTime();
		_history.push(`${this.employeeInfo.name} is fired from ${this.company} in ${new Date()}`);
		delete this.company;
		delete this.employeeInfo.id;
	}

	this.getHistory = function(){
		return _history;
	}

	this.getWorkTimeInSeconds = function() {
		return _workTime;
	}

	this.calcTime = function() {
		return (new Date().getTime() - _workFrom.getTime()) / this.def._ms; 
	}
}

/*
let epam = new Company({name:"Epam", owner:"Arkadii", maxCompanySize:5});

let artem = new Employee({name:"Artem", age:15, salary:1000, primarySkill:"UX"});
let vova = new Employee({name:"Vova", age:16, salary:2000, primarySkill:"BE"});
let vasyl = new Employee({name:"Vasyl", age:25, salary:1000, primarySkill:"FE"});
let ivan = new Employee({name:"Ivan", age:35, salary:5000, primarySkill:"FE"});
let orest = new Employee({name:"Orest", age:29, salary:300, primarySkill:"AT"});
let anton = new Employee({name:"Anton", age:19, salary:500, primarySkill:"Manager"});

epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

epam.removeEmployee(2);

let ruslan = new Employee({name:"Ruslan", age:25, salary:200, primarySkill:"None"});
epam.addNewEmployee(ruslan);

ruslan.setSalary(50);
ruslan.setSalary(350.678);
epam.removeEmployee(2);


console.log("Avarage Salary - " + epam.getAvarageSalary());
console.log("Avarage Age - " + epam.getAvarageAge());

setTimeout(() => {
epam.removeEmployee(0);
console.log("Artem works in seconds - " + artem.getWorkTimeInSeconds());
}, 5000);

console.log("Ivan Salary - " + ivan.getSalary());
console.log(epam.getEmployees());
console.log(ruslan.getHistory());
console.log(epam.getFormattedListOfEmployees());
console.log(epam.getHistory());
*/