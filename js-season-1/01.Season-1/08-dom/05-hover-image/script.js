// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    document.querySelector("img").addEventListener("mouseover", () => {

        document.querySelector("img").setAttribute("src", document.querySelector("img").getAttribute("data-hover"));

    });
})();
