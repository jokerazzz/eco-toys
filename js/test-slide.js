var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            // slidesPerColumn: 1,
            // slidesPerGroup:1,
            // slidesPerColumnFill: 'row',
            loop: true,
        },
        420: {
            slidesPerView: 2,
            slidesPerColumn: 4,
            slidesPerGroup:2,
            slidesPerColumnFill: 'row', 
            spaceBetween: 20,
            loop: true,
            centeredSlides: true,
        },
        620: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup:2,
            slidesPerColumnFill: 'row', 
            spaceBetween: 40,
            loop: true,
            centeredSlides: true,
        },
        800: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
          },
      }
  });