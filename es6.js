const number = [89, 35, 98, 12];

const student = {
    name: 'shakib khan',
    age: 43,
    movie: ['king khan', 'Dhakar Mastan']
}
//*1. template string
const about = `My Name is ${student.name} age ${student.age} and my movie name are ${student.movie} Number ${number[3]}
also like movies ${student.movie[0]}`;
console.log(about);

//*2. Arrow function

const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}

//*spread operator

// const newNumbers = number;
const newNumbers = [...number];

number.push(99);
number.push(99);
number.push(99);

//* create a new array from an older array and add an element 
const currentNumbers = [...number, 55];

console.log(number);
console.log(newNumbers);
console.log(currentNumbers);
