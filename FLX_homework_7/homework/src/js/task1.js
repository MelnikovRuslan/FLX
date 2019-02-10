let users = [{login:"Admin", password:"RootPass"}, {login:"User", password:"UserPass"}]; //array of objects with logins and passwords
let login = prompt('Pleace enter your login');
let userIndex = -1;

if(!login){
	alert ('Canceled');
}else{
	if(login.length >= 4){
		for(let i = 0; i < users.length; i++){
			if(users[i].login === login){
				userIndex = i;
			}
		}
		if(userIndex < 0){
			alert('I don’t know you');
		}else{
			let password = prompt('Pleace enter your password');
			if(!password){
				alert('Canceled');
			}else{
				if(users[userIndex].password === password){
					new Date().getHours() < 20 ? alert(`Good day, dear ${login}`):alert(`Good evening, dear ${login}`);
				}else{
					alert('Wrong password');
				}
			}
		}
	}else{
		alert("I don't know any users having name length less than 4 symbols");
	}
}
