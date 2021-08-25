//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// filter given array 

// search big number by filter 
const numbers = [10, 55, 99, 22, 44, 66]
const bigNumber = numbers.filter(x => x > 20);
console.log(bigNumber);


// filter product big size  

const products = [

    { name: 'iphone', price: 500 },
    { name: 'xiaomi', price: 100 },
    { name: 'apple', price: 1000 },
    { name: 'htc', price: 100 },

];

const richPrice = products.filter(product => product.price > 100);
const htcPhone = products.filter(product => product.name == 'htc');
// console.log(richPrice);
// console.log(htcPhone);


//  The find() method returns the value of the array element that passes a test (provided by a function).

/* The method executes the function once for each element present in the array:

If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
Otherwise it returns undefined

find() does not execute the function for empty array elements.

find() does not change the original array. */
// find() given property  not  a given  empty array

const bigValue = products.find(product => product.price > 500);
console.log(bigValue);