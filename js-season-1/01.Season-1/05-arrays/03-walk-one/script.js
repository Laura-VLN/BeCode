// 05-arrays/01-get-element/script.js - 5.1: walk through the list


(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    let iterator = fruits.values();

    document.getElementById("run").addEventListener("click", () => {
        for (let value of iterator) {
            console.log(value);
        }
    });

})();
