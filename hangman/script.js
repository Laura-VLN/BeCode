let mot = ("banana").split("")
let mots = ['banana', 'apple', 'watermelon', 'honeydew', 'orange', 'pineapple']
let buttons = document.querySelectorAll(".letter");
let wordLetters = document.getElementById("wordLetters");
let tiret ;

let images = ["img/t1.jpg", "img/t2.jpg", "img/t3.jpg", "img/t4.jpg", "img/t5.jpg", "img/t6.jpg", "img/t7.jpg"]
let next = 0;
let image = document.querySelector("img");

//Création d'un random dans le tableau "mots"
function randomMot() {

    mot = mots[Math.floor(Math.random() * mots.length)].split("");

}

//Création des spans contenant la valeur "_ " par rapport à un mot donné
function createTiret() {

    wordLetters.innerHTML = "";

    mot.forEach(letter => {
        tiret = document.createElement("span");
        tiret.innerHTML = "_ ";
    
        wordLetters.appendChild(tiret); //Ajoute la span créée dans wordLetter
    });

}

//Appel de la fonction 
createTiret();


let spanTable;


//Attribue l'image à la source de "a"
function changeImage(a) {

    a = a.setAttribute("src", images[next]);

}

//Change le tiret en lettre
function changeTiret(letter) {

    let spanTable = wordLetters.querySelectorAll("span"); //Attribue à spanTable une liste/un tableau de toutes les spans de wordLetters

    let indices = [];
    let idx = mot.indexOf(letter); // = l'index de la lettre se situant dans le mot

    while (idx != -1) { //-1 = si il ne trouve pas de valeur correspondante
        indices.push(idx);
        idx = mot.indexOf(letter, idx +1);
    }

    indices.forEach(indice => {
        spanTable[mot.indexOf(letter, indice)].innerHTML = letter;

    });
}

//Attribue un état win ou fail à la partie
function gameState() {

    let spanTable = wordLetters.querySelectorAll("span");

    let bool = true

    spanTable.forEach(span => {
        if (span.innerHTML == "_ ") {
            bool = false;
        }
        
    }); 
    
    if (bool) {
        document.querySelector("#win").style.visibility = "visible";
        document.querySelector("#playAgain").style.visibility = "visible";
    }
    //fail
    if (next == 7) {
        document.querySelector("#fail").style.visibility = "visible";
        document.querySelector("#playAgain").style.visibility = "visible";
    }

}

//Réinitialisation pour restarter la partie
function restart() {

    next = 0;
    randomMot();
    createTiret();
    image.setAttribute("src", "");
    document.querySelector("#win").style.visibility = "hidden";
    document.querySelector("#playAgain").style.visibility = "hidden";
    document.querySelector("#fail").style.visibility = "hidden";
    document.querySelector("#playAgain").style.visibility = "hidden";

}

//Déclenchement du restat au click sur le bouton Play Again
document.getElementById("playAgain").addEventListener("click", () => {

    restart();

});

//Sur chaque button du tableau buttons, au click, si next < 7 : si lettre ok, tiret devient la valeur du bouton, sinon changer image +1. Ensuite, appel de la fonction gameState donnant l'état de la partie
buttons.forEach(button => {

    button.addEventListener("click", function() {

        if (next < 7) {
            if (mot.includes(button.innerHTML)) {
                changeTiret(button.innerHTML);
            }
            else {
                changeImage(image);
                next ++;
            }
        }

        document.getElementById("counter").innerHTML = "Guesses left : " + next + "/7";
        gameState()

    });

})

// Wrap every letter in a span
var textWrapper = document.querySelector('#win');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '#win .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '#win',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // Wrap every letter in a span
var textWrapper = document.querySelector('#fail');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '#fail .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '#fail',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });