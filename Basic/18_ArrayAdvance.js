//reduce() Array
//Syntax
//array.reduce((a,c)=>[Logic, initialValue])
// example
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);  
// console.log(sum); // Output: 15

//slice
//Syntax
//array.slice(start, end)
// example
// const fruits = ['apple', 'banana', 'cherry', 'date'];
// const slicedFruits = fruits.slice(1, 3); // ['banana', 'cherry']
// console.log(slicedFruits); // Output: ['banana', 'cherry']
// console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

//splice
//Syntax
//array.splice(start, deleteCount, item1, item2, ...)
// example
// const fruits2 = ['apple', 'banana', 'cherry', 'date'];
// const removedFruits = fruits2.splice(1, 2); // ['banana', 'cherry']
// console.log(removedFruits); // Output: ['banana', 'cherry']
// console.log(fruits2); // Output: ['apple', 'orange', 'grape', 'date']

//Concat
// example
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// console.log(array1.concat(array2)); // Output: [1, 2, 3, 4, 5, 6]
// console.log(array1); // Output: [1, 2, 3]
// console.log(array2); // Output: [4, 5, 6]

//flat
//example
// const nestedArray = [1, 2, [3, [4, 5]]];
// const flatArray = nestedArray.flat();
// console.log(flatArray); // Output: [1, 2, 3, [4, 5]]
// const flatArray2 = nestedArray.flat(2);
// console.log(flatArray2); // Output: [1, 2, 3, 4, 5]

//Spread operator (...)
// example
const array1 = [1, 2, 3];
const array2 = [ 4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

//Destructuring
// example
const array = [1, 2, 3];
const [a, b, c] = array;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

const languages = ['JavaScript', 'Python', 'Java'];
const [, ,third] = languages;
console.log(third);