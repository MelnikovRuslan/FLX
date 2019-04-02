let users = document.getElementById('users');
let modal = document.getElementById('myModal');
let modalContent = document.getElementById('modalContent');
let span = document.getElementsByClassName("close")[0];
let closeBtn = document.getElementById('clodeModal');
let saveBtn = document.getElementById('saveBtn');
let body = document.querySelector('body')

let postsModal = document.getElementById('postsModal');
let closePosts = document.getElementById('close');
let postModalContent = document.getElementById('postModalContent');

let usersArr = new Array();

closePosts.addEventListener('click', closeModal);
span.addEventListener('click', closeModal);

closeBtn.addEventListener('click', closeModal);
saveBtn.addEventListener('click', saveChange, false);

window.onclick = function(event) {
  if (event.target == modal || event.target == postsModal) {
		modal.style.display = "none";
		postsModal.style.display = "none";
		
		body.style.overflow = 'auto'
		body.style.paddingRight = '0px'
	}
	if('editBtn showPosts'.includes(event.target.className)){
		body.style.overflow = 'hidden'
		body.style.paddingRight = '16px'
	}
}

function getUsers(url, callBack) {
	showSpinner();
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.send();
	xhr.onreadystatechange = function() {
  		if (xhr.readyState != 4) return;
 		if (xhr.status != 200) {
   		alert(xhr.status + ': ' + xhr.statusText);
  		} else {
   		callBack(JSON.parse(xhr.responseText));
  		}
	}
}

function getCat(users){
	var xhr = new XMLHttpRequest();
	xhr.open('GET',`https://api.thecatapi.com/v1/images/search?limit=${users.length}`, true);
	xhr.send();
	xhr.onreadystatechange = function() {
  		if (xhr.readyState != 4) return;
 		if (xhr.status != 200) {
   		alert(xhr.status + ': ' + xhr.statusText);
  		} else {
  			addUsers(users, JSON.parse(xhr.responseText));
  		}
	}
}

function deleteUser(e){
	showSpinner();
	let id = Number(e.target.parentElement.id);
	var url = `https://jsonplaceholder.typicode.com/users/${id}`;
	var xhr = new XMLHttpRequest();
	xhr.open("DELETE", url, true);
	xhr.onload = function () {
		var users = JSON.parse(xhr.responseText);
			if (xhr.readyState == 4 && xhr.status == "200") {
				hideSpinner();
				deleteItem(e);
			} else {
				console.error(users);
			}
	}
	xhr.send(null);
}

function updateUser(user, elements, e){
	showSpinner();
	let url = `https://jsonplaceholder.typicode.com/users/${user.id}`;
	let json = JSON.stringify(user);
	let xhr = new XMLHttpRequest();
	xhr.open("PUT", url, true);
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr.onload = function () {
		let users = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "200") {
			hideSpinner();
			showUpdate(user, elements);
			closeModal(e);
		} else {
			console.error(users);
			console.error('Could not save user');
			hideSpinner();
		}
	}
	xhr.send(json);
}

function addUsers(arr, cats) {
	usersArr = arr;
	for(let i = 0; i < arr.length; i++){
		let user = document.createElement('div');
		user.className = 'user';
		user.id = i+1;
		
		let {email, name, phone, address:{city, street, suite}, company:{name:companyName = name, catchPhrase}} = arr[i];
		
		let image = document.createElement('div');
		image.className = 'avatar';

		let img = document.createElement('img');
		img.setAttribute('src', cats[i].url);
		img.setAttribute('alt', 'avatar');
		image.appendChild(img);

		let content = document.createElement('div');
		content.className = 'content';
		
		let addressInfo = document.createElement('div');
		addressInfo.innerHTML = `
			<h4>Address</h4>
			<ul>
				<li>City - <span class='info'>${city}</span></li>
				<li>Street - <span class='info'>${street}</span></li>
				<li>Suite - <span class='info'>${suite}</span></li>
			</ul>`;

		let companyInfo = document.createElement('div');
		companyInfo.innerHTML = `
			<h4>Company</h4>
			<ul>
				<li>Name - <span class='info'>${companyName}</span></li>
				<li>Catch Phrase - <span class='info'>${catchPhrase}</span></li>
			</ul>`;

		let userInfo = document.createElement('div');
		userInfo.innerHTML = `
			<h4>User</h4>
			<ul>
				<li>Email - <span class='info'>${email}</span></li>
				<li class='name'>Name - <span class='info'>${name}</span></li>
				<li>Phone - <span class='info'>${phone}</span></li>
			</ul>`;

		let contorlBtns = document.createElement('div');
		contorlBtns.className = 'contorlBtns';

		let editBtn = document.createElement('button');
		editBtn.className = 'editBtn'
		editBtn.appendChild(document.createTextNode('EDIT'));
		editBtn.addEventListener('click', editItem);

		let deleteBtn = document.createElement('button');
		deleteBtn.className = 'deleteBtn'
		deleteBtn.appendChild(document.createTextNode('DELETE'));
		deleteBtn.addEventListener('click', deleteUser);

		let showPosts = document.createElement('button');
		showPosts.className = 'showPosts';
		showPosts.appendChild(document.createTextNode('Show Posts'));
		showPosts.addEventListener('click', callFun);

		content.appendChild(addressInfo);
		content.appendChild(companyInfo);
		content.appendChild(userInfo);

		contorlBtns.appendChild(editBtn);
		contorlBtns.appendChild(showPosts);
		contorlBtns.appendChild(deleteBtn);

		user.appendChild(image);
		user.appendChild(content);

		user.appendChild(contorlBtns);
		users.appendChild(user);
	}
	hideSpinner();
}

function editItem(e){
	let parent = e.target.parentElement.parentElement;
	let elem = parent.getElementsByClassName('info');
	let data = document.getElementsByClassName('data');
	for(let i = 0; i < elem.length; i++){
		data[i].value = elem[i].textContent;
	}
	modal.style.display = "block";
	saveBtn.elements = elem;
	saveBtn.parent = parent;
	saveBtn.data = data;
}

function saveChange(e) {
	let elements = e.target.elements;
	let parent = e.target.parent;
	let data = e.target.data;
	
	let user = usersArr.find(function(x){
		if(x.id === Number(parent.id)){
			return x;
		}
	});

	user.address.city = document.forms[0].userCity.value;
	user.address.street = document.forms[0].userStreet.value;
	user.address.suite = document.forms[0].userSuite.value;
	user.company.name = document.forms[0].userCompany.value;
	user.company.catchPhrase = document.forms[0].userPhrase.value;
	user.email = document.forms[0].userEmail.value;
	user.name = document.forms[0].userName.value;
	user.phone = document.forms[0].userPhone.value;

	updateUser(user, elements, e);
}

function showUpdate(user, elements) {
	let {email, name, phone, address:{city, street, suite}, company:{name:companyName = name, catchPhrase}} = user;
	let answer = new Array(city, street, suite, companyName, catchPhrase, email, name, phone);
	for(let i = 0; i < answer.length; i++){
		elements[i].innerHTML = answer[i];
	}
}

function deleteItem(e) {
	let parent = e.target.parentElement.parentElement;
	let userId = usersArr.findIndex(elem => elem.id === Number(parent.id));
	usersArr.splice(userId, 1);
	parent.remove();
}

function closeModal(e) {
	e.target.parentElement.parentElement.style.display = "none";
	if (e.target.parentElement.id === 'postModalContent') {
		document.getElementById('postList').remove()
	}
	body.style.overflow = 'auto'
	body.style.paddingRight = '0px'
}

function showSpinner() {
	document.getElementById("eclipse").style.display = "block";
 	document.getElementById("loader").style.display = "block";
}

function hideSpinner() {
	document.getElementById("eclipse").style.display = "none";
	document.getElementById("loader").style.display = "none";
}

function getPostsOrComments(url, callBack) {
	showSpinner();
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.send();
	xhr.onreadystatechange = function() {
  		if (xhr.readyState != 4) return;
 		if (xhr.status != 200) {
   		alert(xhr.status + ': ' + xhr.statusText);
  		} else {
   		callBack(JSON.parse(xhr.responseText));
  		}
	}
	hideSpinner();
}

function callFun(e){
	let userPosts;
	let getPostsComplete = false;
	let userComments;
	let getCommentsComplete = false;
	let userID = Number(e.target.parentElement.parentElement.id);
	getPostsOrComments(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`, function(posts){
		userPosts = posts;
		getPostsComplete = true;
	});
	getPostsOrComments(`https://jsonplaceholder.typicode.com/comments`, function(coments){
		userComments = coments;
		getCommentsComplete = true;
	});
	showSpinner();

	let checkPostAndComments = setInterval(() => {
		if (getPostsComplete && getCommentsComplete) {
			clearInterval(checkPostAndComments)
			hideSpinner();
			showPosts(userPosts, userComments)
			postsModal.style.display = "block";
			postsModal.scrollTop = 0;
		}
	}, 200);
}

function showPosts(userPosts, userComments) {
	let addressInfo = document.createElement('ul');
	addressInfo.id = 'postList';
		
	for(let i = 0; i < userPosts.length; i++){
		usercommentsFiltered = userComments.filter( comment => {
			return comment.postId == userPosts[i].id
		})

		let content = document.createElement('li');
		content.innerHTML = `
			<h3><b>Title:</b> ${userPosts[i].title}</h3>
			<p><b>Body</b> ${userPosts[i].body}</p>
			<h3>Comments:</h3>
			<ul>
				${usercommentsFiltered.map( item => `<li>
				<p><b>Body:</b> ${item.body}</p>
				<p class='comment-name'><b>Name:</b> ${item.name}</p>
				<p class='comment-email'><b>Email:</b> ${item.email}</p>
				</li>`).join('')}
			</ul>
		`;	
		addressInfo.appendChild(content);
		postModalContent.appendChild(addressInfo);
	}
}

getUsers('https://jsonplaceholder.typicode.com/users', getCat);