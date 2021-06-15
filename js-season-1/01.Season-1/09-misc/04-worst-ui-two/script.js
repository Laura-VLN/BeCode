// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    let one = new Number(document.getElementById("part-one").innerHTML);
    let two = new Number(document.getElementById("part-two").innerHTML);
    let three = new Number(document.getElementById("part-three").innerHTML);
    let four = new Number(document.getElementById("part-four").innerHTML);

    function phonenumber() {
        return document.getElementById("target").innerHTML = "+" + one.toString() + two.toString().padStart(2, "0") + three.toString().padStart(2, "0") + four.toString().padStart(2, "0"); 
    }

    document.getElementById("part-one").addEventListener("click", () => {
        one += 1;
        document.getElementById("part-one").innerHTML = one;
        phonenumber();

        if (one >= 499) {
            one -= 1;
        }
    })

    document.getElementById("part-two").addEventListener("click", () => {
        two += 1;
        document.getElementById("part-two").innerHTML = two;
        phonenumber();

        if (two >= 99) {
            two -=1;
        }
    })

    document.getElementById("part-three").addEventListener("click", () => {
        three += 1;
        document.getElementById("part-three").innerHTML = three;
        phonenumber();

        if (three >= 99) {
            three -=1;
        }
    })

    document.getElementById("part-four").addEventListener("click", () => {
        four += 1;
        document.getElementById("part-four").innerHTML = four;
        phonenumber();

        if (four >= 99) {
            four -=1;
        }
    })

})();
