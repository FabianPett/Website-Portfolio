/* Place your JavaScript in this file */
document.getElementById("year").textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
    const title = "Welcome to my coding portfolio!";
    const titleElement = document.getElementById("typing-title");
    let index = 0;

    function type() {
        if (index < title.length) {
            titleElement.innerHTML += title.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust speed of typing
        } else {
            titleElement.classList.remove("typing"); // Remove cursor after typing
        }
    }

    titleElement.classList.add("typing");
    type();
});
