const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.backstage__arrowForward',
    prevEl: '.backstage__arrowBack',
  },
});

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 4,
  spaceBetween: 29,
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize:  115,
  },
  mousewheelControl: false,
});
