const readlineSync = require("readline-sync");

let number = readlineSync.question('What\'s your favorite number ?');

while (number != 42) {
    readlineSync.question('Maybe you should change. Give me another number : ');
    number = readlineSync.question('Maybe you should change. Give me another number : ')
    continue;
}
