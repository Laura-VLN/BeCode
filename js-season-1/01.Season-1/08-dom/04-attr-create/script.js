// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    document.getElementById("target").style.backgroundImage = `url('${document.getElementById("source").getAttribute("data-image")}')`;
    document.getElementById("source").removeAttribute("data-image");

})();
