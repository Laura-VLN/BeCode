const readlineSync = require("readline-sync");

let rand = Math.floor(Math.random() * 100);
let ask= readlineSync.question('Guess the number : ');

while (ask != rand) {
    if (ask > rand) {
        ask = readlineSync.question("Too high ! Try again :");
    }

    else if (ask < rand) {
        ask = readlineSync.question("Too low ! Try again :");
    }
}

if (ask == rand) {
    console.log("Well guessed !");
}