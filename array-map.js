// array map
const numbers = [2, 3, 5, 8];
const multi = numbers.map(x => x * 2);
console.log(multi);

// array object 
const products = [

    { name: 'iphone', price: 500 },
    { name: 'xiaomi', price: 100 },
    { name: 'apple', price: 1000 },
    { name: 'htc', price: 100 },

];

const name = products.map(product => product.name);
// console.log(name);
// foreach 
const price = products.forEach(products => products);
console.log(price);

const add = products.map(product => product.price + product.price);
console.log(add);