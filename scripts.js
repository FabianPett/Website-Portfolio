document.getElementById("year").textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
    const title = `Building My Skills, One Project at a Time.`;
    const titleElement = document.getElementById("typing-title");
    let index = 0;

    titleElement.textContent = "";

    function type() {
        if (index < title.length) {
            titleElement.textContent += title[index];
            index++;
            setTimeout(type, 110);
        }
    }

    type();
});


document.addEventListener("DOMContentLoaded", function () {
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.topnav a');

        let currentSection = '';


        let maxDistance = Infinity;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const distance = Math.abs(rect.top);

            if (distance < maxDistance) {
                maxDistance = distance;
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => link.classList.remove("active"));

        if (currentSection) {
            document.getElementById(`${currentSection}Link`).classList.add("active");
        }
    }

    document.getElementById("homeLink").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: 'smooth' // Smooth scroll
        });
    });

    window.addEventListener('scroll', setActiveLink);

    setActiveLink();
});




