// P5.js interactive canvas with UI
// Base Tutorial: https://p5js.org/reference/#/p5.Element

let strokeWeightSlider, colorPicker, bgColorPicker;
let clearButton, modeButton, saveButton;
let drawMode = "line";

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.parent("p5Container");
    background(240);

    // Stroke weight slider (custom label)
    strokeWeightSlider = createSlider(1, 10, 3);
    strokeWeightSlider.position(20, 660);
    createP('Stroke Weight').position(20, 600);

    // Stroke color picker
    colorPicker = createColorPicker('#ff0000');
    colorPicker.position(180, 660);
    createP('Line Color').position(180, 600);

    // Background color picker
    bgColorPicker = createColorPicker('#ffffff');
    bgColorPicker.position(340, 660);
    createP('Background').position(340, 600);

    // Clear canvas button
    clearButton = createButton('Clear Canvas');
    clearButton.position(500, 660);
    clearButton.mousePressed(clearCanvas);

    // Toggle draw mode
    modeButton = createButton('Switch to Circle Mode');
    modeButton.position(500, 600);
    modeButton.mousePressed(toggleDrawMode);

    // Save canvas
    saveButton = createButton('Save Drawing');
    saveButton.position(20, 750);
    saveButton.mousePressed(() => saveCanvas('myDrawing', 'png'));

    // Update DOM content live with stroke weight
    setInterval(() => {
        const dynamicDiv = document.getElementById("dynamicContent");
        if (dynamicDiv) {
            dynamicDiv.innerHTML = "Live stroke weight: " + strokeWeightSlider.value();
        }
    }, 1000);
}

function draw() {
    background(bgColorPicker.value());
    stroke(colorPicker.value());
    strokeWeight(strokeWeightSlider.value());

    if (mouseIsPressed) {
        if (drawMode === "line") {
            line(mouseX, mouseY, pmouseX, pmouseY);
        } else {
            fill(colorPicker.value());
            noStroke();
            ellipse(mouseX, mouseY, 20, 20);
        }
    }
}

function toggleDrawMode() {
    if (drawMode === "line") {
        drawMode = "circle";
        modeButton.html("Switch to Line Mode");
    } else {
        drawMode = "line";
        modeButton.html("Switch to Circle Mode");
    }
}

function clearCanvas() {
    background(bgColorPicker.value());
}

function keyPressed() {
    if (key === 'C' || key === 'c') {
        clearCanvas();
    }
}
