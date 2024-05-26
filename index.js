const toTop = document.querySelector(".to-top");

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        toTop.style.opacity = "1"; // Make the button visible
        toTop.style.pointerEvents = "auto"; // Enable pointer events to make it clickable
    } else {
        toTop.style.opacity = "0"; // Hide the button
        toTop.style.pointerEvents = "none"; // Disable pointer events to prevent clicking
    }
});
