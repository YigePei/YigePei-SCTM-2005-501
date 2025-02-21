// https://p5js.org/reference/#/p5.Element - P5.js Drawing and UI tutorial

let strokeWeightSlider;
let colorPicker;
let clearButton;

function setup() {
    createCanvas(600, 400);
    background(220);

    // Create slider for stroke weight
    strokeWeightSlider = createSlider(1, 10, 5);
    strokeWeightSlider.position(20, 420);
    
    // Create color picker for stroke color
    colorPicker = createColorPicker('#ff0000');
    colorPicker.position(180, 420);
    
    // Create button to clear the canvas
    clearButton = createButton('Clear Canvas');
    clearButton.position(350, 420);
    clearButton.mousePressed(clearCanvas);
}

function draw() {
    stroke(colorPicker.value()); // Get color from picker
    strokeWeight(strokeWeightSlider.value()); // Get stroke weight from slider

    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

// Function to clear the canvas when button is clicked
function clearCanvas() {
    background(220);
}

// Function to clear the canvas when "C" key is pressed
function keyPressed() {
    if (key === 'C' || key === 'c') {
        clearCanvas();
    }
}