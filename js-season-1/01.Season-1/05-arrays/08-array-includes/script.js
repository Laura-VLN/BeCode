// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    let i = 0;

    document.getElementById("run").addEventListener("click", () => {
        fruits.forEach(fruit => {
            if (fruit == "apple") {
                i = i + 1;
            }
        });
        console.log("There is \"" + i + "\" apple in the table.")
    });

})();
