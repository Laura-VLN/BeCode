class Circle {
    xPos;
    yPos;
    radius;

    constructor(a, b, c) { /* la maman */
        this.xPos = a;
        this.yPos = b; 
        this.radius = c;
    }

    set rad(newRadius) {
        this.radius = newRadius;
    }

    move(xOffset, yOffset) {
        this.xPos = xOffset;
        this.yPos = yOffset;
    }

    get surface() {
        return Math.PI*Math.pow(this.radius,2);
    }
}

var cercle1 = new Circle(10, 20, 5);

console.log(cercle1.surface);