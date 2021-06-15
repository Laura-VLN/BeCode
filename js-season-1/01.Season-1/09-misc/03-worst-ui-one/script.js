// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    document.getElementById("slider").addEventListener("mousemove", () => {

        document.getElementById("target").innerHTML = `0${document.getElementById("slider").value}`; // "concaténation"

    })

})();