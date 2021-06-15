const readlineSync = require("readline-sync");

let min = readlineSync.question('Can you give me a number please?');
let current = readlineSync.question('Another one but bigger?');
let max = readlineSync.question('And a bigger one than the latest?');

if ((current < max) && (current > min)) {
    console.log(current + " is between " + min + " and " + max + " !");
  }
  else {
      console.log(current + " is not between " + min + " and " + max + " !")
  }

if (min > max) {
    console.log("OMFG ! What did you not understand when I said \"bigger and bigger\" ?! That was for a fucking reason ! Stupid idiot ! Sorry, I'm a little bit nervous sometimes :D \(asshole ...)")
}

