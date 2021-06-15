
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    let date = new Date();
    let hour = date.getHours() * 60;
    let min = date.getMinutes() + hour;

    if (min <= 1050) {
        document.getElementById("target").innerHTML = "Hello !"
    }
    else {
        document.getElementById("target").innerHTML = "Good evening !"
    }

})();