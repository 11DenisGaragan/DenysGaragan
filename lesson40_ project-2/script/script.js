const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay: {
    //     delay: 2000,
    // },
    loop: true,
  });

  const swiper2 = new Swiper(".mySwiper2", {
   slidesPerView: 3,
   spaceBetween: 30,
   navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
   pagination: {
    el: ".swiper-pagination",
    clickable: true,
   },
   loop: true,
  });





  input.onblur = function() {
    if (!input.value.includes('@')) { // це не електронна адреса
      input.classList.add('invalid');
      error.innerHTML = 'Будь ласка, введіть правильну електронну адресу.'
    }
  };
  
  input.onfocus = function() {
    if (this.classList.contains('invalid')) {
      // видалити індикатор помилки, тому що користувач хоче ввести дані заново
      this.classList.remove('invalid');
      error.innerHTML = "";
    }
  };