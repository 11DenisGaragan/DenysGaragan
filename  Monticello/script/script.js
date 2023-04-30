const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2000,
    },
    loop: true,
  });

  const swiper2 = new Swiper(".mySwiper-horizontal", {
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
    //  autoplay: {
    //     delay: 2000,
    // },
   loop: true,
  });


  input.onblur = function() {
    if (!input.value.includes('@')) { 
      input.classList.add('invalid');
      error.innerHTML = 'Будь ласка, введіть правильну електронну адресу.'
    }
  };
  
  input.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error.innerHTML = "";
    }
  };