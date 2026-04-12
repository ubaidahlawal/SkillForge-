function animateCounter(id, target, suffix) {
    const element = document.querySelector(id);
    let current = 0;
    const increment = Math.ceil(target / 100);

    const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
            current = target;
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = current + suffix;
        }
    }, 20);
}


animateCounter("#students-count", 10000, "+");
animateCounter("#courses-count", 50, "+");
animateCounter("#success-count", 95, "%");


const joinBtn = document.querySelector("#joinBtn");
const emailInput = document.querySelector("#emailInput");
const formMessage = document.querySelector("#formMessage");

joinBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    
    if (email === "") {
        formMessage.textContent = "Please enter your email!";
        formMessage.style.color = "red";
        return;
    }

    
    if (!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email!";
        formMessage.style.color = "red";
        return;
    }

    
    formMessage.textContent = "You're in! Welcome to SkillForge!";
    formMessage.style.color = "lightgreen";
    emailInput.value = "";
});

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    observer.observe(element);
});

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector("#collapsibleNavId");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show");
        }
    });
});