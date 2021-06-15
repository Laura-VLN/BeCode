// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
    document.getElementById("run").addEventListener("click", ()=>{

        var array = keys.map((element, i) => {
            return [keys[i], values[i]];
        });

        var obj = Object.fromEntries(array);

        console.log(obj);

    }) 

})();
