// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    let all = document.querySelectorAll(".target");

    all.forEach(all => {
        all.innerHTML = "Owned !"
    });

})();
