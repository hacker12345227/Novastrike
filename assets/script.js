// NovaStrike Core Script

// Smooth page load fade
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s";
        document.body.style.opacity = 1;
    }, 100);
});

// Button glow on hover
document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("mouseover", () => {
        el.style.boxShadow = "0 0 15px red";
    });
    el.addEventListener("mouseout", () => {
        el.style.boxShadow = "none";
    });
});

// Fake status system
const statusText = document.getElementById("system-status");
if (statusText) {
    const states = ["ONLINE", "DEPLOYING", "UPDATING"];
    let i = 0;

    setInterval(() => {
        statusText.innerText = states[i];
        i = (i + 1) % states.length;
    }, 2000);
}

// Support form (fake submit)
const supportForm = document.getElementById("support-form");
if (supportForm) {
    supportForm.addEventListener("submit", e => {
        e.preventDefault();
        alert("Support request sent to NovaStrike.");
        supportForm.reset();
    });
}
