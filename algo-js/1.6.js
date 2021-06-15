const readlineSync = require("readline-sync");

let numberOne = readlineSync.question('Can you give me a number please?');
let numberTwo = readlineSync.question('And another?');
result = numberOne % numberTwo

console.log("The result is " + result);