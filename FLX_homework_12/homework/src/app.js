const rootNode = document.getElementById('root');

let container = document.createElement('div');
container.className = 'container';

let control = document.createElement('div');
control.className = 'control';

let todoTitle = document.createElement('h2');
todoTitle.id = 'todoTitle';

let addTask = document.createElement('a');
addTask.className = 'addTask';
addTask.href='#/add';
addTask.appendChild(document.createTextNode('Add new task')); 

let cancle = document.createElement('a');
cancle.className = 'cancle';
cancle.href='#/main';
cancle.appendChild(document.createTextNode('Cancle'));

let saveChange = document.createElement('a');
saveChange.className = 'saveChange';
saveChange.href='#/main';
saveChange.appendChild(document.createTextNode('Save Change')); 
saveChange.addEventListener('click', saveTask);

let changeItem = document.createElement('a');
changeItem.className = 'changeItem';
changeItem.href='#/main';
changeItem.appendChild(document.createTextNode('Save Change'));

let taskInput = document.createElement('input');
taskInput.setAttribute('maxlength', '25');
taskInput.className = 'taskInput';

let ul = document.createElement('ul');
ul.id = 'taskList';

window.onload = function(){
	if(localStorage.getItem('tasks') === null){
		let tasks = [];
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
	showList();
}
window.addEventListener('hashchange', showPage, false);

const pages = {
	mainPage(){
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
		control.innerHTML = '';
		todoTitle.textContent = 'Simple TODO application';
		container.appendChild(todoTitle);
		container.appendChild(addTask);
		container.appendChild(ul);
		return container;
	},
	addPage(){
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
		control.innerHTML = '';
		todoTitle.textContent = 'Add Task';
		container.appendChild(todoTitle);
		container.appendChild(taskInput);
		control.appendChild(cancle);
		control.appendChild(saveChange);
		container.appendChild(control);
		taskInput.value = '';
		return container;
	},
	modifyPage(){
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
		control.innerHTML = '';
		todoTitle.textContent = 'Change Task';
		container.appendChild(todoTitle);
		container.appendChild(taskInput);
		control.appendChild(cancle);
		control.appendChild(changeItem);
		container.appendChild(control);
		return container;
	}
}

function showPage(){
	const findPage = 0;
	let loc = window.location.hash;
	if(loc === '#/add'){
		rootNode.appendChild(pages.addPage());
	} else if(loc === '#/main') {
		rootNode.appendChild(pages.mainPage());
		showList();
	} else if(loc.search( /#\/modify/gmi) >= findPage){ 
		rootNode.appendChild(pages.modifyPage());
	}
}

function saveTask(){
	let todo = taskInput.value; 
	if(!todo.replace(/\s/g, '').length){
		alert('Incorect Data');
		return false;
	}
	let task = {
		isDone:false,
		id:Date.now(),
		description:todo
	}
	let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
	taskInput.value = '';
}

function showList(){
	let listItem = document.getElementById('taskList');
	let tasks = JSON.parse(localStorage.getItem('tasks')); 
	listItem.innerHTML = '';
	for(let i = 0; i < tasks.length; i++){
		let li = document.createElement('li');
		li.className = 'item';
		li.id = tasks[i].id;

		let itemText = document.createElement('p');
		itemText.className = 'itemText';
		itemText.appendChild(document.createTextNode(tasks[i].description));
		itemText.addEventListener('click', changeTask);

		let check = document.createElement('img');
		check.className = 'check';
		if(tasks[i].isDone === false){
			check.src = './assets/img/todo-s.png';
		}else{
			check.src = './assets/img/done-s.png';
			itemText.style.backgroundColor = 'grey';
		}
		check.addEventListener('click', checkItem);

		let deleteBtn = document.createElement('img');
		deleteBtn.className = 'delete';
		deleteBtn.src = './assets/img/remove-s.jpg';
		deleteBtn.addEventListener('click', removeItem);

		li.insertBefore(check, li.firstChild);
		li.appendChild(itemText);
		li.appendChild(deleteBtn);
		listItem.appendChild(li); 
	}
}

function checkItem(e){
	let tasks = JSON.parse(localStorage.getItem('tasks'));
	let parentID = e.target.parentElement.id;
	for(let i = 0; i < tasks.length; i++){
		if(Number(parentID) === tasks[i].id && tasks[i].isDone === false){
			e.target.src = './assets/img/done-s.png';
			tasks[i].isDone = true;
			tasks.push(tasks[i]);
			tasks.splice(i, 1);
			localStorage.setItem('tasks', JSON.stringify(tasks));
			break;
		} else if(Number(parentID) === tasks[i].id && tasks[i].isDone === true){
			e.target.src = './assets/img/todo-s.png';
			tasks[i].isDone = false;
			localStorage.setItem('tasks', JSON.stringify(tasks));
			break;
		}
	}
	showList();
}

function removeItem (e){
	let tasks = JSON.parse(localStorage.getItem('tasks'));
	let parentID = e.target.parentElement.id;
	for(let i = 0; i < tasks.length; i++){
		if(tasks[i].id === Number(parentID)){
			tasks.splice(i, 1);
			break;
		}
	}
	localStorage.setItem('tasks', JSON.stringify(tasks));
	e.target.parentNode.remove(); 
}

function changeTask(e){
	let parentID = e.target.parentElement.id;
	window.location.hash = `#/modify/:${parentID}`;
	let tasks = JSON.parse(localStorage.getItem('tasks'));
	taskInput.value = e.target.innerText;
	changeItem.addEventListener('click', function(){
		for(let i = 0; i < tasks.length; i++){
			if(Number(parentID) === tasks[i].id){
				tasks[i].description = taskInput.value;
			}
		}
		localStorage.setItem('tasks', JSON.stringify(tasks));
	});

}

rootNode.appendChild(pages.mainPage());