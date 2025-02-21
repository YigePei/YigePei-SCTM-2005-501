/*
Citing Code Assignment
Author: [Your Name]
Date: [Current Date]
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

// Creating a new HTML element dynamically
document.addEventListener("DOMContentLoaded", () => {
    let heading = document.createElement("h2"); // Added a heading dynamically
    heading.innerHTML = "Welcome to My Interactive Page";
    document.body.appendChild(heading);

    let newElement = document.createElement("p"); // Creating a new paragraph element
    newElement.innerHTML = "This paragraph was added dynamically using JavaScript.";
    document.body.appendChild(newElement); // Appending it to the body

    // Adding event listener for Click Me button
    document.getElementById("myButton").addEventListener("click", () => {
        newElement.innerHTML = "You clicked the button!"; // Updates text when button is clicked
    });
});

/*
Tutorial 2: P5.js Button and Event Handling
Source: https://p5js.org/reference/#/p5.Element
*/

function setup() {
    noCanvas(); // Removes default canvas from P5.js
    let myP5Button = createButton('Click Me Again'); // Creates a button using P5.js
    myP5Button.position(100, 150);
    myP5Button.mousePressed(changeText); // Adds interactivity to change text
}

function changeText() {
    let paragraph = document.querySelector("p");
    if (paragraph) {
        paragraph.innerHTML = "You clicked the P5.js button!"; // Changes text when button is clicked
    }
}

/*
Extension: Combining techniques
- We use JavaScript to manipulate the DOM and add a heading and paragraph dynamically.
- We use P5.js to create an interactive button that modifies the paragraph text.
- Added multiple interactive elements by combining DOM and P5.js functionalities.
*/
