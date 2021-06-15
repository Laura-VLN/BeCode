
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {
    
    let date = new Date();
    let hour = date.getHours();

    if (hour < 18) {
        document.getElementById("target").innerHTML = "Hello !"
    }
    else {
        document.getElementById("target").innerHTML = "Good evening !"
    }

})();
