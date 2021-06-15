// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    var array = document.getElementById("numbers").value.split(",");

    document.getElementById("run").addEventListener("click", () => {

        alert(array.sort((function(a, b){return a-b})));

    });

})();
