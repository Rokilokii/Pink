const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: false,
    spaceBetween: 0,
    loopFillGroupWithBlank: false,
    centeredSlides: false,
    initialSlide: 1,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
// var duplicate_prev = document.querySelector(".swiper-slide-duplicate-prev");
// var duplicate_cur = document.querySelector(".swiper-slide-duplicate");
// var duplicate_act = document.querySelector(".swiper-slide-duplicate-active");
// console.log(duplicate_prev);
// duplicate_cur.remove();
// duplicate_prev.remove();
// duplicate_act.remove();