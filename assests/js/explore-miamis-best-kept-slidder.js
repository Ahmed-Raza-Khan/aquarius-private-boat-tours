document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector('.squarius-island-tour-section');
    const scrollContainer = section.querySelector('.row');
    const cards = section.querySelectorAll('.col-md-4');

    if (window.innerWidth <= 425) {
        cards[1].classList.add('is-active');

        const observerOptions = {
            root: scrollContainer,
            threshold: 0.5,
            rootMargin: "0px -25% 0px -25%"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    cards.forEach(c => c.classList.remove('is-active'));
                    entry.target.classList.add('is-active');
                }
            });
        }, observerOptions);

        cards.forEach(card => observer.observe(card));
    }
});
