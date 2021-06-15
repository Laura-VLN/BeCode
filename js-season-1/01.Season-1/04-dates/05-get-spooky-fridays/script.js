
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    document.getElementById("run").addEventListener("click", () => {

            const year = document.getElementById("year").value;
            var months = [];

            for (month = 1; month <= 12; month ++) {
                var date = new Date(month + "/13/" + year);                          
                if (date.getDay() == 5) {
                    months.push(date.toLocaleString('default', {month: 'long'}));
                }
            }

            alert(months);

    });

})();