let buttons = document.querySelector('#swiper-button-prev')

let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    spaceBetween: 10,
    overflow: 'hidden',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        0: {
            slidesPerView:1,
            spaceBetween: 20,
        },
        500: {
            slidesPerView:2,
            spaceBetween: 20,
        },
        780: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1450: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    }
})
