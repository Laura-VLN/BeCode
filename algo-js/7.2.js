const readlineSync = require("readline-sync");

let i;
let fib = [];


fib[0] = 0;
fib[1] = parseInt(readlineSync.question("Give me an integer : "));

for (i=2; i <= 10; i++) {
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
}