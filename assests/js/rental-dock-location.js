document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector('.rental-slider');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (!slider || !nextBtn || !prevBtn) {
        console.log("Slider elements not found");
        return;
    }

    nextBtn.addEventListener('click', function () {
        slider.style.transition = "transform 0.6s ease";
        slider.style.transform = "translateX(-25%)";

        setTimeout(function () {
            slider.appendChild(slider.firstElementChild);
            slider.style.transition = "none";
            slider.style.transform = "translateX(0)";
        }, 600);
    });

    prevBtn.addEventListener('click', function () {
        slider.style.transition = "none";
        slider.prepend(slider.lastElementChild);
        slider.style.transform = "translateX(-25%)";

        setTimeout(function () {
            slider.style.transition = "transform 0.6s ease";
            slider.style.transform = "translateX(0)";
        }, 10);
    });

});
