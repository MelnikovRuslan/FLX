function userCard(cardKey){
	let card = {
		key:cardKey,
		balance: 100, 
		transactionLimit: 100,
		historyLogs: [],
		putCredits: function(creditsAmont, operationType = 'Received credits'){
			if(this.inputValid(creditsAmont)){
				this.balance += creditsAmont;
				this.historyLogs.push({
					operationType:operationType,
					credits:Math.abs(creditsAmont),
					operationTime:this.transactionTime()
				});	
			}
		},
		takeCredits: function(creditsAmont){
			if(this.balance > creditsAmont && this.transactionLimit > creditsAmont){
				let sign = - 1;
				this.putCredits(sign * creditsAmont, 'Withdrawal credits');	
			}else{
				console.error('Transition limit or balance is less than the entered number');
			}
			
		},
		setTransactionLimit: function(limit){
			if(this.inputValid(limit)){
				this.transactionLimit = limit;
				this.historyLogs.push({
					operationType:'Transaction limit change',
					credits:Math.abs(limit),
					operationTime:this.transactionTime() 
				});
			}
		},
		transferCredits: function(creditsAmont, card){
			const taxPercent = 0.005;
			let creditsWithTax = creditsAmont * taxPercent + creditsAmont;
			if(this.balance > creditsWithTax){
				this.takeCredits(creditsWithTax);
				card.putCredits(creditsAmont);	
			} else {
				console.error("You don't have enough money in the account");
			}
			
		},
		transactionTime: function(){
			return new Date().toLocaleString('en-GB');
		},
		getCardOptions: function(){
			return{
				key:cardKey, 
				balance:this.balance, 
				transactionLimit:this.transactionLimit, 
				historyLogs:this.historyLogs
			}
		},
		inputValid: function(number){
			if(typeof number === 'number'){
				return true;
			} else {
				console.error('Invalid data');
			}
		}
	}
	return card;
}

class UserAccount{
	constructor(name){
		this.name = name,
		this.cards = [];
	}
	addCard(){
		const maxCards = 2;
		if(this.cards.length <= maxCards){
			this.cards.push(userCard(this.cards.length + 1));	
		}else{
			console.error('You already have 3 cards');
		}
	}
	getCardByKey(key){
		const check = - 1;
		if(this.cards.findIndex(cardKey => cardKey.key === key) !== check){
			return this.cards[key - 1];
		}else{
			console.error('Invalid card ID');
		}
	}
}