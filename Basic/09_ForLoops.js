//For Loop

//syntex
// for (initialization; condition; increment/decrement) {
//     // code block to be executed
// }
// Array used in Number and array using index
// for (let i = 0; i < 20; i++) {
//   console.log("Hello World " + i);
// }

//For-in Loop
//syntex
// for (variable in object) {
//     // code block to be executed
// }
//Example
const person = { fname: "Mohit", lname: "Kumar", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

//For-of Loop
//syntex
// for (variable of iterable) {
//     // code block to be executed
// }
//Example
const fruits = ["apple", "banana", "cherry"]; 
for (let fruit of fruits) {
  console.log(fruit);
}

//For of Object inside array
const students = [
  { name: "Mohit", age: 25 },
  { name: "Rohit", age: 30 },
  { name: "Ravi", age: 28 }
];
for (let student of students) {
  console.log(student.name + " is " + student.age + " years old.");
}
