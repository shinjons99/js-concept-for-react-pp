//* JSON => stringify and parse
const student = {
    name: 'shakib khan',
    age: 43,
    movie: ['king khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);


const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

//*2 fetch

// fetch('url')
// .then(res => res.JSON())
// .then(data => console.log(data))


//*object keys and values

const keys = Object.keys(student);
const values = Object.values(student);


//*for
const number = [23, 54, 67, 87,23, 78];
number.forEach(num => console.log(num));
number.map(num => num*2);


//* for of on array like object
 //* loop on an object using for in 


 //* add or remove from an array

 const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'Phone', price: 22000, brand: 'Iphone', color: 'golder'},
    {name: 'Watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'Sunglass', price: 300, brand: 'Raybon', color: 'black'},
    {name: 'camera', price: 32000, brand: 'canon', color: 'Gray'},
];


const newProduct = {name:'webcam', price:700, brand: 'logitech'};

//* copy products array and then add newProduct 

const newProducts = [...products, newProduct];
console.log(newProducts);

//* create a new array without one specific item
//* remove any item means create a new array without that item

const remaining = products.filter(product => product.name !== 'Phone');
console.log(remaining);