let inputBox, submitBtn, fullscreenBtn, clearBtn;
let adventureText = "Welcome! Type a command (e.g., 'explore', 'look around', 'run').";
let playerName = "";
let nameX = 100;
let nameSpeed = 2;

function setup() {
    createCanvas(windowWidth, windowHeight).parent("game-container");

    // Create a container for UI elements
    let container = createDiv('').class("container");

    // Create input field
    inputBox = createInput('').parent(container);

    // Button group
    let buttonGroup = createDiv('').class("button-group").parent(container);

    submitBtn = createButton("Submit").parent(buttonGroup);
    submitBtn.mousePressed(processInput);

    fullscreenBtn = createButton("Fullscreen").parent(buttonGroup);
    fullscreenBtn.mousePressed(toggleFullscreen);

    clearBtn = createButton("Clear").parent(buttonGroup);
    clearBtn.mousePressed(() => adventureText = "Cleared. Enter a new command.");

    textAlign(CENTER);
    textSize(20);
}

// Process user input
function processInput() {
    let userText = inputBox.value().trim().toLowerCase();
    inputBox.value('');

    if (userText.includes("explore")) {
        adventureText = "You walk deeper into the forest and find a mysterious cave.";
    } else if (userText.includes("look")) {
        adventureText = "You see an old wooden chest. It's locked.";
    } else if (userText.includes("run")) {
        adventureText = "You sprint away from the cave, heart pounding.";
    } else {
        adventureText = "Nothing interesting happens.";
    }
}

// Toggle fullscreen mode
function toggleFullscreen() {
    let fs = fullscreen();
    fullscreen(!fs);
}

// Exit fullscreen when ESC key is pressed
function keyPressed() {
    if (keyCode === ESCAPE) {
        fullscreen(false);
    }
}

function draw() {
    background(lerpColor(color(30, 30, 60), color(60, 60, 120), 0.5));

    fill(255);
    text(adventureText, width / 2, height / 2);

    // Animate player's name
    if (playerName) {
        textSize(40);
        fill(200, 100, 255);
        text(playerName, nameX, height - 50);
        nameX += nameSpeed;
        if (nameX > width - 100 || nameX < 100) nameSpeed *= -1;
    }
}