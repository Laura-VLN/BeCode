const readlineSync = require("readline-sync");

let color = readlineSync.question('Can you give me your socks color please?');
let vegetable = readlineSync.question('Your favorite vegetable?');
let item = readlineSync.question('What\'s the object you use the most ?');
let animal = readlineSync.question('And the cuttest animal in the world ?');
let motorcycle = readlineSync.question('Type the word \"motorcycle\" ?');

console.log("Once upon a time a " + color + " " + vegetable + " who was living in a " + item + ". This " + vegetable + " was used to take his " + animal + " to start his " + motorcycle + ". END");