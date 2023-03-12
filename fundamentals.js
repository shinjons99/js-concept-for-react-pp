//* 1. How to declare a variable using let and const

const fatherName = 'Azizul Haque';
let session = 'rainy';
session = 'winter';

//* basic condition: >, <, ===, !==, <=, >=
//* multiple condition: &&, ||
if(fatherName === 'Azizul Haque' || session === 'rainy'){

}
else if(fatherName === 'Azizul Haque'){

}
else {

}

//*3. Array

//*Array indexing
//* length, push, pop, shift, unshift

const number = [89, 35, 98, 12];
number[0]=56;
//*4. for loop

for(let i=0; i<number.length; i++){
    const number = number[i];
    confirm.log(number);
}

//*5. function

function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);

//*6. object
const student = {
    name: 'shakib khan',
    age: 43,
    movie: ['king khan', 'Dhakar Mastan']
}
const myVariable = 'age';

console.log(student.age);//* direct by property
console.log(student['age']);//* access via property name string
console.log(student[myVariable]);//* access via property name in a variable 