const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = 
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const typingText = document.querySelector(".typing");
const words = ["Beautiful Websites", "Responsive Designs", "Interactive Apps"];
let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    if (name.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }

    if (email.value.trim() === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    } else if (!email.value.includes("@")) {
        document.getElementById("emailError").textContent = "Enter valid email";
        valid = false;
    }

    if (message.value.trim() === "") {
        document.getElementById("messageError").textContent = "Message is required";
        valid = false;
    }

    if (valid) {
        alert("Message sent successfully!");
        form.reset();
    }
});
