/*
Citing Code Assignment
Author: [Yige Pei]
Date: [2025.2.21]
This code combines elements from two tutorials from W3Schools and P5.js.

Process:
1. Found two tutorials on W3C Schools and P5.js.
2. Followed the tutorials.
3. Wove the two tutorials together.
4. Extended the code by adding interactivity and combining DOM manipulation with P5.js.
5. Included links to the tutorials in the code using comments.
Source: https://www.w3schools.com/js/js_comments.asp
*/

/*
Tutorial 1: Using JavaScript DOM Methods (W3Schools)
Source: https://www.w3schools.com/js/js_htmldom_methods.asp
*/

// Selecting the div and button
let dynamicContent = document.getElementById("dynamicContent");
let toggleTextButton = document.getElementById("toggleTextButton");

// Function to toggle text inside the div
function toggleText() {
    if (dynamicContent.innerHTML === "This text will change when you click the button.") {
        dynamicContent.innerHTML = "Text changed!";
    } else {
        dynamicContent.innerHTML = "This text will change when you click the button.";
    }
}

// Adding event listener for button click
toggleTextButton.onclick = toggleText;

/*
Tutorial 2: P5.js Button and Event Handling
Source: https://p5js.org/reference/#/p5.Element
*/

function setup() {
    noCanvas(); // Removes default canvas from P5.js

    let p5Button = createButton('P5.js Button'); // Creates a button using P5.js
    p5Button.position(100, 200);
    p5Button.mousePressed(changeP5Text); // Adds interactivity to change text

    let p5Div = createDiv('Click the P5.js button to change this text.');
    p5Div.id("p5Div");
    p5Div.position(100, 250);
}

function changeP5Text() {
    let p5Div = select("#p5Div");
    p5Div.html("You clicked the P5.js button!");
}

/*
Extension: Combining techniques
- We use JavaScript to manipulate the DOM and toggle text dynamically.
- We use P5.js to create an interactive button that modifies the div content.
- Added multiple interactive elements by combining DOM and P5.js functionalities.
*/