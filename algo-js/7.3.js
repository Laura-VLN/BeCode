const readlineSync = require("readline-sync");

let a = 1
let b = parseInt(readlineSync.question("Give me a number "));
let c;
let arr= [];

for (a = 1; a < b; a++) {

    c = b % a;

    if ( c == 0 && a != b && a != 1 ){

        arr.push(a);

    }
}

console.log(arr);