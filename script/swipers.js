const swiperAdvantages = new Swiper('.section-advantages-swiper', {
    slidesPerView: "auto",    

    breakpoints: {
        1000: {
            spaceBetween: 34,
        },
        560: {
            spaceBetween: 16,
        },
        320: {
            spaceBetween: 8,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
      },

  });

const swiperPromo = new Swiper('.section-promo-swiper', {
    slidesPerView: "auto",    

    breakpoints: {
        1000: {
            spaceBetween: 34,
        },
        560: {
            spaceBetween: 16,
        },
        320: {
            spaceBetween: 8,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
      },

  });

const swiperNews = new Swiper('.section-news-swiper', {
    slidesPerView: "auto",    

    breakpoints: {
        1000: {
            spaceBetween: 34,
        },
        560: {
            spaceBetween: 16,
        },
        320: {
            spaceBetween: 8,
        },
    },

      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
      },

  });



