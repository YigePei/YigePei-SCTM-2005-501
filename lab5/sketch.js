let jsonData;
let beans = [];

function preload() {
  jsonData = loadJSON('data.json');
}

function setup() {
  createCanvas(600, 400); // you can adjust width/height here
  textFont('Georgia');
    // ... rest of your code

  for (let i = 0; i < 30; i++) {
    beans.push({
      x: random(width),
      y: random(height),
      size: random(6, 12),
      speed: random(0.5, 2)
    });
  }
}

function draw() {
  background(255, 250, 240);

  // floating coffee beans
  noStroke();
  fill(139, 69, 19, 80);
  for (let bean of beans) {
    ellipse(bean.x, bean.y, bean.size * 1.5, bean.size);
    bean.y -= bean.speed;
    if (bean.y < -10) {
      bean.y = height + 10;
      bean.x = random(width);
    }
  }

// title banner (taller)
fill(220, 180, 140);
rect(0, 0, width, 90);

fill(50);
textSize(32);
textStyle(BOLD);
text("Lab 5 - JSON", 20, 35);  // moved down to y=35

  // data content
  fill(40);
  textSize(18);
  textStyle(NORMAL);
  text("Sleep Hours: " + jsonData.sleep, 20, 80);

  text("Favorite Coffees:", 20, 120);
  for (let i = 0; i < jsonData.coffee.length; i++) {
    text("• " + jsonData.coffee[i], 40, 150 + i * 30);
  }
}
