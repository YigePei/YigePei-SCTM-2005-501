document.addEventListener("DOMContentLoaded", () => {
    // Example: Smooth scrolling effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Example: Automatic text scrolling animation
    const scrollBox = document.querySelector(".scrollbox .content");
    if (scrollBox) {
        let position = 0;
        setInterval(() => {
            position -= 1;
            scrollBox.style.transform = `translateY(${position}px)`;
        }, 50);
    }
});
