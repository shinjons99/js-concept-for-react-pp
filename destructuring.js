//*1. Array Destructuring

const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y]=[42, 65];
const [x, y]= numbers;

function boxify (num1, num2){
    const nums = [num1, num2];
    return nums;
}
// console.log(x, y);
const [first, second]= boxify(90, 34);

// console.log(boxify(90, 34));
const student = {
    name: 'shakib khan',
    age: 43,
    movie: ['king khan', 'Dhakar Mastan']
}

const [firstMovie, secondMovie] = student.movie;

//* object destructuring
// const {name, age}= {name:'Alu', age: 14};
const {name, age}= {id:12, name:'Alu', salary: 34000, age: 14};


const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification:{
        height: 66,
        weight: 67,
        address: 'Dhaka',
        drink: 'Milk',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {machine, ide} = employee;
const {weight, address} = employee.specification;
const {language} = employee.language[0];
console.log(language);