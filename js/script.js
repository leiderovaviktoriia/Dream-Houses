// hamburger

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.mobile-menu'),
  menuItem = document.querySelectorAll('.mobile-menu__list-item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('mobile-menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('mobile-menu_active');
      })
  })
})


// section features

const swiper1 = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 40,
  centeredSlides: true,
  initialSlide: 1,
});

// section review

const swiper = new Swiper(".mySwiper", {
  pagination: {
      clickable: true,    
      el: ".swiper-pagination",
  },
  slidesPerView: "auto",
  spaceBetween: 56,
  centeredSlides: true,
  initialSlide: 1,
});


