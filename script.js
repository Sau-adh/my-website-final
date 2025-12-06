const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light");
        const isLight = document.body.classList.contains("light");
        themeToggle.textContent = isLight ? "☀️ Light" : "🌙 Dark";
    });
}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = contactForm.name.value.trim();

        if (!name) {
            formStatus.textContent = "Please enter your name before sending.";
            formStatus.style.color = "#ffb347";
            return;
        }

        formStatus.textContent = `Thank you, ${name}! Your message has been recorded for this demo.`;
        formStatus.style.color = "#7CFC00";
        contactForm.reset();
    });
}
