//While loops

//Syntex
// while (condition) {
//     // code block to be executed
// }

//Example
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

//do while loop
//Syntex
// do {
//     // code block to be executed
// } while (condition);
//Example
// let j = 5;
// do {
//     console.log(j);
//     j++;
// }
// while (j < 5);

//Practical Example
let password = "";
let correctPassword = "admin";
do {
    password = prompt("Enter your password:");
}
while (password !== correctPassword);
console.log("Acess granted!");