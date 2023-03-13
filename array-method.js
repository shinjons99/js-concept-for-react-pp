const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'Phone', price: 22000, brand: 'Iphone', color: 'golder'},
    {name: 'Watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'Sunglass', price: 300, brand: 'Raybon', color: 'black'},
    {name: 'camera', price: 32000, brand: 'canon', color: 'Gray'},
];
//* using map
const brands = products.map(product =>product.brand);
console.log(brands);

const prices = products.map(product =>product.price);
console.log(prices);

//*2. forEach
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));
products.forEach(product =>{
    console.log(product.name);
})

//*3. filter

const cheap = products.filter(product => product.price<=5000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName);

//*4. find
const special = products.find(product => product.name.includes('n'));
console.log(special);

