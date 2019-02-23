let el = null;
let container = document.getElementById('container');
let listFull = document.getElementById('listFull');
let addForm = document.getElementById('addForm');
let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let todoList = document.getElementById('todoList');

addBtn.disabled = true;
taskInput.addEventListener('keyup', checkInput);
addBtn.addEventListener('click', addItem);

function checkInput(){
	if(!taskInput.value.replace(/\s/g, '').length){
		addBtn.disabled = true;
	}else{
		addBtn.disabled = false;
	}
}

function addItem(e){
	let newItem = taskInput.value;
	
	let item = document.createElement('li');
	item.className = 'item';
	item.setAttribute('draggable', 'true');
	
	let itemCheck = document.createElement('i');
	itemCheck.className = 'material-icons unchecked';
	itemCheck.appendChild(document.createTextNode('check_box_outline_blank'));
	
	let itemText = document.createElement('p');
	itemText.className = 'itemText';
	itemText.appendChild(document.createTextNode(newItem));

	let itemDel = document.createElement('i');
	itemDel.className = 'material-icons delete';
	itemDel.appendChild(document.createTextNode('delete'));

	item.appendChild(itemCheck);
	item.appendChild(itemText);
	item.appendChild(itemDel);
	todoList.appendChild(item);
	
	addForm.reset();
	isFull();
	addListener(item);
	e.preventDefault();
}

function checkItem(e){
	if(e.target.textContent === 'check_box_outline_blank'){
		e.target.innerHTML = 'check_box';
	} else {
		e.target.innerHTML = 'check_box_outline_blank'
	}
	e.preventDefault();
}

function deleteItem(e){
	let el = e.target.parentNode.remove();
	if(document.getElementById('limitMesssage')){
		document.getElementById('limitMesssage').remove();
	taskInput.disabled = false;
	}
}

function isFull(){
	const maxItems = 10;
	if(!document.getElementById('limitMesssage') && todoList.children.length === maxItems){
		let limitMesssage = document.createElement('p');
		let container = document.getElementById('container');
		limitMesssage.id = 'limitMesssage';
		limitMesssage.appendChild(document.createTextNode('Maximum item per list are created'));
		listFull.appendChild(limitMesssage);
		addBtn.disabled = true;
		taskInput.disabled = true;
	}
	checkInput();
}

function dragStart(e){
  el = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);
}

function dragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  this.classList.add('over');
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragLeave(e) {
  this.classList.remove('over');
}

function dropItem(e) {
  if (el !== this) {
    this.parentNode.removeChild(el);
    let currentElement = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin', currentElement);
    let prevElem = this.previousSibling;
    addListener(prevElem);
  }
  this.classList.remove('over');
  return false;
}

function addListener(elem){
	elem.addEventListener('dragstart', dragStart, false);
	elem.addEventListener('dragover', dragOver, false);
	elem.addEventListener('dragleave', dragLeave, false);
	elem.addEventListener('drop', dropItem, false);
	elem.firstChild.addEventListener('click', checkItem);
	elem.lastChild.addEventListener('click', deleteItem);
}