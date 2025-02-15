document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".container", { opacity: 1, duration: 1 });
    gsap.to(".title", { opacity: 1, duration: 1, delay: 0.5, y: 50 });

    gsap.from(".btn", {
        opacity: 0, y: 50, duration: 1, delay: 1, stagger: 0.3
    });

    // Переход на страницу проектов
    document.getElementById("projects-btn")?.addEventListener("click", () => {
        window.location.href = "projects.html";
    });

    // Возвращение на главную страницу
    document.getElementById("back-btn")?.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    // Показ и скрытие социальных ссылок
    document.getElementById("social-btn")?.addEventListener("click", () => {
        let socialLinks = document.querySelector(".social-links");
        if (socialLinks.style.display === "none" || socialLinks.style.display === "") {
            gsap.to(".social-links", { opacity: 1, display: "flex", duration: 0.5 });
            gsap.to(".social-links a", { opacity: 1, stagger: 0.3, duration: 0.5 });
        } else {
            gsap.to(".social-links", { opacity: 0, duration: 0.5, onComplete: () => {
                socialLinks.style.display = "none";
            }});
        }
    });

    // Эффект наведения на кнопки
    document.querySelectorAll(".btn, .project-btn").forEach(button => {
        button.addEventListener("mouseenter", () => gsap.to(button, { scale: 1.1, duration: 0.3 }));
        button.addEventListener("mouseleave", () => gsap.to(button, { scale: 1, duration: 0.3 }));
    });
});