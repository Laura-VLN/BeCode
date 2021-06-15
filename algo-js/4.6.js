const readlineSync = require("readline-sync");

function factorial(x) {
  if (x === 0) {
    return 1; /* retourne 1 si x=0 */
  }
  else {
    return x * factorial(x-1); /* retourne x-1 du nombre indiqué jusqu'à 1 */
  }
}

let number = readlineSync.question('Can you give me a number please?'); /* stocke le nombre indiqué */

console.log(factorial(number));