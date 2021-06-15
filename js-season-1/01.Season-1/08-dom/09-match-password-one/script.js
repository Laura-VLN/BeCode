// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    document.getElementById("run").addEventListener("click", ()=>{

        let one = document.getElementById("pass-one");
        let two = document.getElementById("pass-two");

        if (one.value != two.value) {
            one.style.border = "solid 1px red"
            two.style.border = "solid 1px red"
        }

    }) 

})();
