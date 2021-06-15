class Rectangle {
    #topLeftXPos;
    #topLeftYPos;
    #width;
    #length;

    constructor(a, b, c, d) {
        this.#topLeftXPos = a;
        this.#topLeftYPos = b;
        this.#width = c;
        this.#length = d;
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

let rect1 = new Rectangle(21, 25, 15, 41);
let rect2 = new Rectangle(95, 98, 30, 47);

console.log(rect1.collides(rect2));