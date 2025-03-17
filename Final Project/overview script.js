document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuList = document.querySelector(".menu ul");
    
    menuToggle.addEventListener("click", function () {
        menuList.classList.toggle("active");
    });

    console.log("JavaScript file loaded successfully.");

    // Example of adding external resources
    console.log("Check out these useful references:");
    console.log("1. CSS Grid Layout: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout");
    console.log("2. JavaScript Event Listeners: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener");
});
