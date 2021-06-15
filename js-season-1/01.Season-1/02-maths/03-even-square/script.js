
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {
        
        for (let index = 0; index < 21; index++) {
            alert(Math.pow(index + 1, 2))
        }

    });

})();
