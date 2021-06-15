// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    let x = Math.floor(Math.random() * 100) + 1;
    let z = prompt("Give me your number : ");
    let y = 0;

    while (x != z) {

        if (z < x) {

            z = prompt("Too low ! Try again : ");
            y ++; 
    
        }
        if (z > x) {
    
            z = prompt("Too high ! Try again : ");
            y ++; 
    
        }

    }

    if (x == z) {
    
        y ++;
        alert("That\'s it ! You needed " + y + " guesses.");

    }

})();
