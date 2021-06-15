
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here
    let i = 1;

    while (i <= 100) {
        if (i % 3 === 0) {
            console.log("Fizz");
        }

        if (i % 5 === 0) {
            console.log("Buzz");
        }

        if (i % 3 && i % 5 === 0) {
            console.log("Fizzbuzz");
        }

        console.log(i);
        i += 1;
    }

})();
