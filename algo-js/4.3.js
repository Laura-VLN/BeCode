const readlineSync = require("readline-sync");

let n = new Number(0);
n = Math.floor(readlineSync.question('How many columns do you want in your array?'));

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

function multiRand(n) {
    let arr = [];
    while (n != 0) {
        arr.push(rand10());
        n--;
    }
    return arr;
}

console.log(multiRand(n));