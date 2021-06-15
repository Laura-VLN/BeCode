const readlineSync = require("readline-sync");

let intNumber = readlineSync.question('Can you give me a number with decimal please?');
let number = readlineSync.question('And another?');
result = parseInt(intNumber) * number

console.log("The result is " + result);