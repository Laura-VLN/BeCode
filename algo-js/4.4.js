const readlineSync = require("readline-sync");

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

function average(arr) {
    let sum = new Number(0);
    arr.forEach(element => {
        sum += element
    });
    return Math.floor(sum/arr.length);
}

function min(arr) {
    return Math.min.apply(null, arr);
}

function max(arr) {
    return Math.max.apply(null, arr);
}

function randomAll(column) {
    let arr = multiRand(column);
    console.log(arr)
    let aver = average(arr);
    let mi = min(arr);
    let ma = max(arr);
    return console.log("Moyenne : " + aver + " Minimum : " + mi + " Maximum : " + ma + " .")
}

let number = Math.floor(readlineSync.question('How many columns do you want in your array?'));

randomAll(number);