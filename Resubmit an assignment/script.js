/*
Citing Code Assignment
Author: Yige Pei
Date: 2025-02-21

This JavaScript combines:
- W3Schools DOM Manipulation (https://www.w3schools.com/js/js_htmldom_methods.asp)
- Original Extension: Real-time dynamic updates on text element
*/

// DOM elements
let dynamicContent = document.getElementById("dynamicContent");
let toggleTextButton = document.getElementById("toggleTextButton");

// Toggle DOM text content (from W3Schools tutorial)
function toggleText() {
    if (dynamicContent.innerHTML.includes("DOM interaction")) {
        dynamicContent.innerHTML = "Now showing: Canvas stroke weight is " + (window.strokeWeightSlider?.value() || '...');
    } else {
        dynamicContent.innerHTML = "Click the button to see DOM interaction.";
    }
}
toggleTextButton.onclick = toggleText;
