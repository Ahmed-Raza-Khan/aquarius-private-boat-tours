var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            enabled: false
        }
    }
});
