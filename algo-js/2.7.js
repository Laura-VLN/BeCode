const readlineSync = require("readline-sync");

let n = readlineSync.question('Give me a number : ');
let n2 = new Number(0);

while (n != 0) {
    n2 = n2 + new Number(readlineSync.question('Give me a number : '));
    n--;
}

console.log(n2);
