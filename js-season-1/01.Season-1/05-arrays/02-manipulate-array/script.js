// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here

    let firstRemoved = fruits.shift();
    let lastRemoved = fruits.pop();

    fruits.unshift("banana")
    fruits.push("kiwi");

    document.getElementById("run").addEventListener("click", () => {
        console.log(fruits);
    });

})();
