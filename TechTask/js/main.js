// -------Accordion --------
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
    });
});
// ------Slider ------
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const mainBtn = document.querySelectorAll('.slider__button');
    let currentSlide = 0;
    function updateSlides(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[index].classList.add('active');
        currentSlide = index;
    }
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateSlides(index);
        });
    });
    prevBtn.addEventListener('click', () => {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        updateSlides(newIndex);
    });
    nextBtn.addEventListener('click', () => {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        updateSlides(newIndex);
    });
    mainBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            updateSlides(0);
        });
    });
    let slideInterval = setInterval(() => {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        updateSlides(newIndex);
    }, 5000);

    const sliderContainer = document.querySelector('.slider');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            let newIndex = currentSlide + 1;
            if (newIndex >= slides.length) {
                newIndex = 0;
            }
            updateSlides(newIndex);
        }, 5000);
    });
});
// ------- Responsive Burger Menu -------------
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const headerNav = document.querySelector('.header__nav');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        headerNav.classList.toggle('active');
    });
});