const readlineSync = require("readline-sync");

class Serie {
    constructor(a, b, c) {
        this.name = a;
        this.year = b;
        this.member = c;
    }
}

function askTvSerie() {
    let name = readlineSync.question('Can you give me the name of your serie please?');
    let year = readlineSync.question('Can you give me the production year please?');
    let arrTemp = [];
    let bool = "yes";

    while (bool == "yes") {
        arrTemp.push(readlineSync.question('What\'s the name of the cast member ?'));
        bool = readlineSync.question('Is there another name of cast member ?');
    }
    let member = arrTemp;
    let table = new Serie(name, year, member);
    return table;
}

console.log(JSON.stringify(askTvSerie()));

