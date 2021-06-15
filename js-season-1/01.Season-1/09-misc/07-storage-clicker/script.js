// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    window.onload = () => { 

        if (!localStorage.getItem("number")) {

            localStorage.setItem("number", 0);

        }

        document.getElementById('target').innerHTML = localStorage.number;
        
    }

    document.getElementById("increment").addEventListener('click',() => {

        let number = localStorage.getItem("number");
        number ++;
        document.getElementById('target').innerHTML = number;
        localStorage.number = number;

    })

})();

/*

    let value;

    if (localStorage.getItem("value") == undefined)
    {
        value = 0
    } else  {
        value = parseFloat(localStorage.getItem("value"))
    }

    document.getElementById("target").innerHTML= value;

    document.getElementById("increment").addEventListener("click", () => {
        value += 1
        document.getElementById("target").innerHTML= value;
        localStorage.removeItem("value");
        localStorage.setItem("value", value);
    })

*/