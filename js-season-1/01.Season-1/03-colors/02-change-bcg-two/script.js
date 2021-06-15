
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    function changeBackground(color) {
        document.body.style.background = color;
    }

    run.addEventListener("click",function() { changeBackground(document.getElementById('color').value) });

})();