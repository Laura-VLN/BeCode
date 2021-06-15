// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    let buttons = Array.from(document.querySelectorAll("button"));
    let inputs = Array.from(document.querySelectorAll("input"));

    buttons.forEach(button => {
        
        button.addEventListener("click", () => {

            let data = button.previousElementSibling;
            let dataMin = parseFloat(data.getAttribute("data-min"));
            let dataMax = parseFloat(data.getAttribute("data-max"));
            let value = Math.floor(Math.random() * (dataMax - dataMin) + dataMin);

            data.value = `${value}`.padStart(2, "0");

            document.getElementById("target").innerHTML = "+" + inputs[0].value + inputs[1].value + inputs[2].value + inputs[3].value;

        })

    });

})();