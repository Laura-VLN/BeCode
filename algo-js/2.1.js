const readlineSync = require("readline-sync");

let age = readlineSync.question('Can you give me your age please?');

if (age <= 17) {
    console.log("You are not yet an adult !");
  }
  else {
    console.log("You are an adult !");
  }