// References:
// 1. The Coding Train - Particle Systems in p5.js: https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/4-particles
// 2. p5.js Array Functions Documentation: https://p5js.org/reference/#/p5.Array

let particles = []; // Array to store particles
let colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD700"]; // Color palette array
let domElements = [];
let speedMultiplier = 1;

function setup() {
    createCanvas(600, 400);
    createElement('h2', 'P5 + Arrays').parent(document.body);
    createElement('p', 'Click to generate particles. Press UP/DOWN to change speed.').parent(document.body);
    let info = createElement('p', 'Particles: 0').parent(document.body);
    domElements.push(info);
}

function draw() {
    background(0);

    // Add new particles randomly
    if (frameCount % 10 === 0) {
        let newParticles = [new Particle(random(width), height)];
        particles = particles.concat(newParticles); // Using concat()
    }

    // Loop through particles in reverse to safely remove expired ones
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();

        if (particles[i].isDead()) {
            particles.splice(i, 1); // Remove particle when its lifecycle ends
        }
    }

    // Update DOM element with particle count and lifespan info
    let particleInfo = particles.map(p => `Lifespan: ${p.alpha}`).join(", ");
    domElements[0].html(`Particles: ${particles.length}<br>${particleInfo}`);
}

function mousePressed() {
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(mouseX, mouseY));
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) speedMultiplier += 0.2;
    if (keyCode === DOWN_ARROW) speedMultiplier = max(0.2, speedMultiplier - 0.2);
}

// Particle Class
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-2, 2);
        this.vy = random(-5, -1);
        this.alpha = 255;
        this.color = random(colors);
        this.type = random(["falling", "bouncing", "spiral"]);
    }

    update() {
        this.x += this.vx * speedMultiplier;
        this.y += this.vy * speedMultiplier;
        this.alpha -= 5;

        // Different behaviors
        if (this.type === "bouncing") {
            this.vy *= -1;
        } else if (this.type === "spiral") {
            this.x += sin(frameCount * 0.1) * 2;
        }
    }

    show() {
        noStroke();
        fill(color(this.color + hex(this.alpha, 2)));
        ellipse(this.x, this.y, 10);
    }

    isDead() {
        return this.alpha <= 0;
    }
}