// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return this.firstname + " " + this.lastname;
        }

        set name(a) {
            a = a.split(" ");
            this.firstname = a[0];
            this.lastname = a[1];
        }
    }
    
    document.getElementById("run").addEventListener("click", ()=>{

        let firstperson = new Person("Laura", "Vilain"); //appel constructor

        console.log(firstperson.name);
        firstperson.name = "Toto Tutu"; //appel setter
        console.log(firstperson.name);
    }) 

})();
