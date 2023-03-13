//* 'almas', 5, true, {}, []
//* '', 0, false, null, undefined
//* check truthy
let myVar = 5;
//* check any truthy
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

let myMoney = 50;
//* you check negative or falsy anything
if(!myMoney){

}

const money = 180;
let food;
if(money>100){
    food = 'biriyani';
}
else{
    food = 'cha biscuit'
}

//*ternary

let food1= money>100?'biriyani': 'cha biscuit';
console.log(food1);


let drink = (money > 100 & myVar > 100) ? "coke": 'filter';
console.log(drink);
//* shortcut number to string conversation
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

//* string to number conversation

const input = '560';
const inputNum = +input;
console.log(inputNum);

//*

let isActive = true;
const showUser = ()=> console.log('display-User');
const hideUser = ()=> console.log('hide-User');
// isActive ? showUser() : hideUser();
//* use && if the left side is true then right side will be execute

isActive && showUser();

//* use|| if the left side is false then right side will be executed

isActive || hideUser();

//* toggle boolean 
isActive = !isActive;
