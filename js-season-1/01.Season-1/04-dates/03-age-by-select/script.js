
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    document.getElementById("run").addEventListener("click", () => {
        let currentDate = new Date();
        let dayBirth = document.getElementById("dob-day").value;
        let monthBirth = document.getElementById("dob-month").value;
        let yearBirth = document.getElementById("dob-year").value;

        let age = currentDate.getFullYear() - yearBirth;

        if (monthBirth > currentDate.getMonth() + 1) {
            age = age - 1;
        }
        else if (monthBirth < currentDate.getMonth() + 1) {
            age = age;
        }
        else if (monthBirth == currentDate.getMonth() + 1) {
            if (dayBirth <= currentDate.getDate()) {
                age = age;
            }
            else {
                age = age - 1;
            }
        }

        alert("Your birthday is : " + dayBirth + "/" + monthBirth + "/" + yearBirth + ". You are " + age + " years old.")

    });

})();
