document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".sidebar nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});
