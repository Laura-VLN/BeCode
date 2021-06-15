// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    
    document.getElementById("run").addEventListener("click", ()=>{

        let person = {
            firstName : "Laura",
            lastName : "Vilain",
            age : 31,
            city : "Mons",
            country : "Belgium"
          };

        console.log("Hello, I'm " + person.firstName + " " + person.lastName + ". I'm " + person.age + " years old and I'm from " + person.city + " in " + person.country + ".");

    }) 

})();
