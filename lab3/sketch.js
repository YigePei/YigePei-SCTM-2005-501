let strokeWeightSlider;
let colorPicker;
let clearButton;

function setup() {
    createCanvas(720, 400);
    background(50);

    // Create slider for stroke weight (range 1 to 10, default 5)
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

// Callback function to clear the canvas when button is clicked
function clearCanvas() {
    background(50);
}

// Callback function to clear the canvas when "C" key is pressed
function keyPressed() {
    if (key === 'C' || key === 'c') {
        clearCanvas();
    }
}