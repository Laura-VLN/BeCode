// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {

        constructor(name) {
            super();
            this.name = name;
        }

        static greeting = "Miaou ";

    }

    class Dog extends Animal {

        constructor(name) {
            super();
            this.name = name;
        }

        static greeting = "Waouf ";

    }
    
    document.getElementById("run").addEventListener("click", ()=>{

        let firstcat = new Cat("Poupouce");
        let firstdog = new Dog("Brutus");

        console.log(firstcat.sayHello());
        console.log(firstdog.sayHello());

    }) 

})();
