const readlineSync = require("readline-sync");

function calcSurface(a,b){ /*nom de la fonction : calcSurface - a & b = inconnues*/
    return a*b; /*retourner la valeur de a*b*/
}

let a = readlineSync.question('Can you give me the length of your rectangle please?'); /*donne une valeur à "a"*/
let b = readlineSync.question('Can you give me the width of your rectangle please?'); /*donne une valeur à "b"*/

console.log("L'aire du rectangle est " + calcSurface(a,b)); /*résultat*/