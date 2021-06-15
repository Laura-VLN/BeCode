const readlineSync = require("readline-sync");

class Rectangle {
    #topLeftXPos;
    #topLeftYPos;
    #width;
    #length;
    #id;

    constructor(a, b, c, d, e) {
        this.#topLeftXPos = a;
        this.#topLeftYPos = b;
        this.#width = c;
        this.#length = d;
        this.#id = e;
    }

    set leftx(newX) {
        this.#topLeftXPos = newX;
    }

    set lefty(newY) {
        this.#topLeftYPos = newY;
    }

    set largeur(newLargeur) {
        this.#width = newLargeur;
    }

    set hauteur(newHauteur) {
        this.#length = newHauteur;
    }

    get leftX() {
        return this.#topLeftXPos;
    }

    get leftY() {
        return this.#topLeftYPos;
    }

    get width() {
        return this.#width;
    }

    get length() {
        return this.#length;
    }

    get id() {
        return this.#id;
    }

    collides(otherRectangle) {
        if (this.#topLeftXPos < otherRectangle.leftX + otherRectangle.width &&
            this.#topLeftXPos + this.#width > otherRectangle.leftX &&
            this.#topLeftYPos < otherRectangle.leftY + otherRectangle.length &&
            this.#length + this.#topLeftYPos > otherRectangle.leftY) {
            return true
        }
        return false
    }
}

function random(n) {
    return Math.floor(Math.random() * n) + 1;
}

function rectGener(n) {
    return new Rectangle(random(700), random(700), random(100), random(100), n);
}

function tableRectGener(n) {
    var tempArr = [];
    for (let index = 0; index < n; index++) {
        tempArr.push(rectGener(index));
    }
    return tempArr;
}

function compareRect(table) {
    var info = "Colliding rectangles are : ";
    var infoTemp = "";
    table.forEach(rectangle1 => {
        table.forEach(rectangle2 => {
            if (rectangle1.collides(rectangle2)) {
                if (rectangle1.id != rectangle2.id) {
                    infoTemp += ("Collison -> Rectangle : " + rectangle1.id + " et Rectangle : " + rectangle2.id + ". \n");
                }
            }
        });
        table.splice(table.indexOf(rectangle1), table.indexOf(rectangle1));
    });
    info = info + infoTemp;
    return info;
}

function WillyWaller2006() {
    console.log("Launch . . .");
    var table = tableRectGener(readlineSync.question('How many rectangles do you want to compare ?'));
    console.log(compareRect(table));
}

WillyWaller2006();