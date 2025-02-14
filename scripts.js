/* Place your JavaScript in this file */
document.getElementById("year").textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
    const title = "Welcome to my coding portfolio!";
    const titleElement = document.getElementById("typing-title");
    let index = 0;

    titleElement.innerHTML = ""; // Clears fallback text

    function type() {
        if (index < title.length) {
            titleElement.innerHTML += title.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            titleElement.classList.remove("typing"); // Remove cursor effect after typing
        }
    }

    titleElement.classList.add("typing");
    type();
});

