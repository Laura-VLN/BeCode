const readlineSync = require("readline-sync");

let shoe = readlineSync.question('Can you give me your shoe size please?');
let birth = readlineSync.question('And your birth year?');
partOne = (shoe*2) + 5
result = (partOne*50) - birth + 1766

console.log("The result is " + result);