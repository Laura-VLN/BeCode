const readlineSync = require("readline-sync");

let choice = readlineSync.question("Hello ! Welcome to te Pizza Flavors Manager. Please choose your actions : 1 - List all the pizza flavors / 2 - Add a new pizza flavors / 3 - Remove a pizza flavor / 4 - Exit this program. Enter your action's number : ");
let pizzaFlavorTable = [];

function all() {

    if (choice == 1) {
        console.log(pizzaFlavorTable);
        choice = readlineSync.question("Please choose your actions : 1 - List all the pizza flavors / 2 - Add a new pizza flavors / 3 - Remove a pizza flavor / 4 - Exit this program. Enter your action's number : ");
        all();
    }
    else if (choice == 2) {
        let newFlavor = readlineSync.question("Give me a new pizza flavor : ");
        pizzaFlavorTable.push(newFlavor);
        console.log(pizzaFlavorTable);
        choice = readlineSync.question("Please choose your actions : 1 - List all the pizza flavors / 2 - Add a new pizza flavors / 3 - Remove a pizza flavor / 4 - Exit this program. Enter your action's number : ");
        all();
    }
    else if (choice == 3) {
        let indexNumber = readlineSync.question("Give me the number of the pizza flavor you want to delete : ");
        pizzaFlavorTable.splice(indexNumber)
        console.log(pizzaFlavorTable)
        choice = readlineSync.question("Please choose your actions : 1 - List all the pizza flavors / 2 - Add a new pizza flavors / 3 - Remove a pizza flavor / 4 - Exit this program. Enter your action's number : ");
        all();
    }
    else if (choice == 4) {
        console.log("Bye !");
    }

}

all();