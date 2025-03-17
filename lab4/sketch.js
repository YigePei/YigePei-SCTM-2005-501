let img;
let video;

function setup() {
    createCanvas(800, 600);
    
    // Load an image using createImg()
    img = createImg('image.jpg', 'Loaded Image');
    img.position(50, 50); // Set the position of the image on the screen
    img.size(300, 400);   // Resize the image
    
    // Load and play a video
    video = createVideo('video.mp4'); // Load video file
    video.position(400, 50); // Set video position
    video.size(400, 300); // Resize video
    video.loop(); // Make the video loop continuously
    video.showControls(); // Display video playback controls
}

function draw() {
    background(200); // Set a gray background color
    textSize(20); // Set text size to 20 pixels
    fill(50); // Set text color to dark gray
    text('Lab 4 - Multimedia', 50, 30); // Draw text at (50, 30)
}