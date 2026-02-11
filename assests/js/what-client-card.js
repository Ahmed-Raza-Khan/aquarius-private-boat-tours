const container = document.getElementById('testimonial-container');
const nextBtn = document.querySelector('.testimonial-client-arrow-btn');
const prevBtn = document.querySelector('.testimonial-client-arrow-btn-left');

nextBtn.addEventListener('click', () => {
    const cards = container.querySelectorAll('.col-md-3');
    container.appendChild(cards[0]);
});

prevBtn.addEventListener('click', () => {
    const cards = container.querySelectorAll('.col-md-3');
    container.prepend(cards[cards.length - 1]);
});
