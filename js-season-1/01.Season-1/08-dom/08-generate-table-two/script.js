// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    let target = document.getElementById("target");
    let table = document.createElement("TABLE");

    target.appendChild(table);

    for (let a = 0; a < 10; a++) {

        let row = table.insertRow(a);

        for (let b = 0; b < 10; b++) {
            let cell = row.insertCell(b) //td
            cell.innerHTML = (a + 1) * (b + 1);
        }
    }

})();
