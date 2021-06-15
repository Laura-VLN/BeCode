// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    document.getElementById("run").addEventListener("click", ()=>{

        let counter = 0;

        people.forEach(element => {
            counter += 1;
        });

        console.log(counter)
        console.log(people.has("Alexandre"));

    }) 

})();
