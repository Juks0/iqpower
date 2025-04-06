let buttons = document.querySelector('#swiper-button-prev')

let swiper = new Swiper(".mySwiper", {
    // cssMode: true,
    loop: true,
    allowTouchMove: true,
    overflow: 'hidden',
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    // mousewheel: true,
    // keyboard: true,
    breakpoints: {
        0: {
            slidesPerView:1,
            spaceBetween: 0,
        },
        500: {
            slidesPerView:2,
            spaceBetween: 5,
        },
        768:{
            slidesPerView:2,
            spaceBetween: 5,
            // allowTouchMove: false,
        },
        780: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        1450: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    }
})
