const readlineSync = require("readline-sync");

let day = readlineSync.question('Give me a number between 1 and 7 : ');

if (day === "1") {
    day = "Monday"
    console.log(day);
} 
else if (day === "2") {
    day = "Tuesday"
    console.log(day);
} 
else if (day === "3") {
    day = "Wednesday"
    console.log(day);
} 
else if (day === "4") {
    day = "Thursday"
    console.log(day);
} 
else if (day === "5") {
    day = "Friday"
    console.log(day);
} 
else if (day === "6") {
    day = "Saturday"
    console.log(day);
}
else {
    day = "Sunday"
    console.log(day);
}