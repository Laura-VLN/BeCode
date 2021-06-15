// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    let target = document.getElementById("target");
    let table = document.createElement("TABLE");

    target.appendChild(table);

    for (let a = 0; a < 10; a++) {

        let row = table.insertRow(a);

        for (let b = 0; b < 1; b++) {
            row.insertCell(b) //td
        }
    }



    
    
    
    
    
    
    
    
    
    
    /*let table = document.getElementById("target")[0];
    let row = table.insertRow;
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    let cell9 = row.insertCell(8);
    let cell10 = row.insertCell(9);*/

})();
