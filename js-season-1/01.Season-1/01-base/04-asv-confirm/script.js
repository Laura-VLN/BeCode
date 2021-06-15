
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    
    function all() {
        var age = prompt("What's your age ?");
        var gender = prompt("What's your gender ?");
        var town = prompt("In which town do you live ?");
        
        alert("You are " + age + " years old. Your gender is " + gender + ". You are living in " + town + ".");

        var confirm = prompt("Can you confirm please ? (yes/no)");

        if (confirm == "yes") {
            return true;
        }
        else {
            return false;
        }
    }

    while (!all()) {
        continue;
    }

})();
