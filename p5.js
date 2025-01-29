// sketch.js - P5.js animation
let circles = [];

function setup() {
  const canvas = createCanvas(600, 400);
  canvas.parent('sketch-holder');
  
  // Create initial circles
  for (let i = 0; i < 5; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(20, 50),
      speedX: random(-2, 2),
      speedY: random(-2, 2),
      color: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  background(240);
  
  // Update and draw circles
  circles.forEach(circle => {
    // Move
    circle.x += circle.speedX;
    circle.y += circle.speedY;
    
    // Bounce off edges
    if (circle.x < 0 || circle.x > width) circle.speedX *= -1;
    if (circle.y < 0 || circle.y > height) circle.speedY *= -1;
    
    // Draw
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);
  });
}