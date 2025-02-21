let cards = document.querySelectorAll(".card");
let desc = document.querySelectorAll(".desc");
let dots = document.querySelectorAll(".dot");
let currentIndex = 0;

const updateSections = () => {
    // Reset all sections and hide descriptions
    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.classList.add("fade-in");
            card.classList.remove("fade-out");
            desc[index].classList.add("fade-in");
            desc[index].classList.remove("fade-out");
            dots[index].classList.add("active");
        } else {
            card.classList.remove("fade-in");
            card.classList.add("fade-out");
            desc[index].classList.remove("fade-in");
            desc[index].classList.add("fade-out");
            dots[index].classList.remove("active");
        }
    });
};

// Left arrow click handler
document.getElementById("arrow-left").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
    updateSections();
});

// Right arrow click handler
document.getElementById("arrow-right").addEventListener("click", () => {
    currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
    updateSections();
});

updateSections();


const button = document.querySelector('.c-btn');
const label = button.querySelector('.c-btn__label');

button.addEventListener('click', () => {
    setTimeout(() => {
        label.textContent = 'Downloaded';
    }, 100);
});

const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4.5,
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});