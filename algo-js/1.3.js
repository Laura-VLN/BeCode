const readlineSync = require("readline-sync");

let userName = readlineSync.question('Can you give me your first name please?');
console.log("Hello " + userName);