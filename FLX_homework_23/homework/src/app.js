class User {
  constructor(name, orderTotalPrice){
    this.name = name;
    this.orderTotalPrice = orderTotalPrice;
    this.weekendDiscount = function() {return 0};
    this.nightDiscount = function() {return 0};
    this.bonus = function() {return 0};
  }
  makeOrder() {
    let price = this.orderTotalPrice - this.weekendDiscount() - this.nightDiscount() - this.bonus();
    return `Price after discount and including bonuses is ${~~(price*100)/100} e.g.`;
  }
}

function getDiscount(target) {
  let time = new Date();
  if(time.getHours() > 23 && time.getHours < 6) {
    target.nightDiscount = function() {
      return target.orderTotalPrice * 0.04;
    }
  } else if(time.getDay() === 6 || time.getDay() === 0) {
    target.weekendDiscount = function() {
      return target.orderTotalPrice * 0.08;
    }
  }
}

function setBonus(target) {
  target.bonus = function() {
    return Math.floor(target.orderTotalPrice / 100) * 5;
  }
}

const user = new User("Jon", 820);
getDiscount(user);
setBonus(user);
console.log(user.makeOrder());