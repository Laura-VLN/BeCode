// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    document.getElementById("run").addEventListener("click", ()=>{

        let one = document.getElementById("pass-one");
        let two = document.getElementById("pass-two");

        let error = document.createAttribute("class");
        error.value = "error";

        let error2 = document.createAttribute("class");
        error2.value = "error";

        if (one.value != two.value) {
            one.setAttributeNode(error);
            two.setAttributeNode(error2);
        }

    }) 

})();
