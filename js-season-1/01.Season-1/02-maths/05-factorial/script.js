
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {

    function factorial(n){
        if(n == 0 || n == 1){
            return 1;
        }
        else{
            return n * factorial(n-1);
        }
    }

    document.getElementById("run").addEventListener("click", () => {

    var n = new Number (document.getElementById("number").value)

    alert (factorial(n))

    });

})();
