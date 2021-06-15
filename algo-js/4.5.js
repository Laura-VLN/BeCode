/* √(x2−x1)2+(y2−y1)2 */
/* Point A = [1, 1], point B = [2, 2] => 1.41 */

const readlineSync = require("readline-sync");

function sousFirst(a, b) { /* (x2−x1)2 & (y2−y1)2 */
    sous = Math.pow((a-b),2);
    return sous;
}

function calcFirst(c, d) { /* (x2−x1)2 + (y2−y1)2 */
    calc = c+d;
    return calc;
}

function calcMiddle(calc) { /* √(x2−x1)2+(y2−y1)2 */
    result = Math.sqrt(calc);
    return result;
}

function calcDistance(table) { /* récupère les données du tableau pour les introduire dans le calcul */
    return calcMiddle(calcFirst(sousFirst(table[2], table[0]), sousFirst(table[3], table[1])));
}

function ask() { /* demande les données à l'utilisateurs et les introduit dans un tableau */
    let arr = [];
    arr[0] = readlineSync.question('Can you give me first X please?');
    arr[1] = readlineSync.question('Can you give me first Y please?');
    arr[2] = readlineSync.question('Can you give me second X please?');
    arr[3] = readlineSync.question('Can you give me second Y please?');
    return calcDistance(arr);
}

console.log(ask()); /* appel de fonction - résultat*/