// https://www.p5js.org - This code comes from the P5.js tutorial
// https://www.w3schools.com/js/js_htmldom_events.asp - W3Schools Click Event Tutorial

// Selecting the div element
let schmoDiv = document.getElementById("schmoDiv");
let toggleButton = document.getElementById("toggleButton");

// Function to toggle the text inside the div when button is clicked
function toggleText() {
    if (schmoDiv.innerHTML === "Hello") {
        schmoDiv.innerHTML = "Howdy!";
    } else {
        schmoDiv.innerHTML = "Hello";
    }
}

// Adding event listener for button click
toggleButton.onclick = toggleText;

// Console log for debugging
console.log("Script loaded and running correctly.");