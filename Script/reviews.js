const swiper = new Swiper(".reviews__slider", {
  slidesPerView: 1,
  spaceBetween: 15,

  navigation: {
    nextEl: ".reviews__arrow--next",
    prevEl: ".reviews__arrow--prev",
  },

  breakpoints: {
    1350: {
      slidesPerView: 3, /* na PC jsou v návrhu tři recenze vedle sebe */
    },
  },
});
