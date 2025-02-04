// Shape class to store object properties and behaviors
class Shape {
    constructor(x, y, size, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    // Draw the shape
    draw() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }

    // Move the shape
    move() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
    }

    // Change speed and color on user interaction
    changeState() {
        this.speedX = random(-5, 5);
        this.speedY = random(-5, 5);
        this.color = color(random(255), random(255), random(255));
    }
}

let myShape;

function setup() {
    createCanvas(600, 400);
    myShape = new Shape(300, 200, 50, 2, 3, 'blue');
}

function draw() {
    background(240);
    myShape.move();
    myShape.draw();
}

// Change shape state on mouse click
function mousePressed() {
    myShape.changeState();
}