var SLIDER = {
  slideRecruitment: function () {
    if (typeof $(".slide-recruitment__agency") === "undefined") return;
    const swiperBanner = new Swiper(".slide-recruitment__agency", {
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 8,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".agency__next",
        prevEl: ".agency__prev",
      },
      pagination: {
        el: ".top-employers .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2.2,
          spaceBetween: 8,
        },
        575: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
    });
  },
  slideRoadmap: function () {
    if (typeof $(".slide-roadmap__thumbs") === "undefined") return;

    const swiper1 = new Swiper(".slide-roadmap__thumbs", {
      slidesPerView: 3,
      spaceBetween: 20,
      // direction: "vertical",
      speed: 600,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        575: {
          spaceBetween: 40,
          direction: "vertical",
          slidesPerView: "auto",
        },
      },
    });
    if (typeof $(".slide-roadmap") === "undefined") return;
    const swiperBanner1 = new Swiper(".slide-roadmap", {
      slidesPerView: 1,
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 8,
      navigation: {
        nextEl: ".swiper-pro__next",
        prevEl: ".swiper-pro__prev",
      },

      thumbs: {
        swiper: swiper1,
      },
    });
  },
  slideIds: function () {
    if (typeof $(".swiper-top-ids") === "undefined") return;
    const slideTopIds = new Swiper(".swiper-top-ids", {
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 6,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".block-top-ids .swiper-btn-next",
        prevEl: ".block-top-ids .swiper-btn-prev",
      },
      pagination: {
        el: ".block-top-ids .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.3,
          spaceBetween: 8,
        },
        575: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
    });
  },
  slideSugest: function () {
    if (typeof $(".swiper-sugest") === "undefined") return;
    const slideSugest = new Swiper(".swiper-sugest", {
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 6,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".block-sugest-post .swiper-btn-next",
        prevEl: ".block-sugest-post .swiper-btn-prev",
      },
      pagination: {
        el: ".block-sugest-post .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });
  },
  slideBlog: function () {
    if (typeof $(".slider-top-blogs") === "undefined") return;
    const slideTopIds = new Swiper(".slider-top-blogs", {
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 1,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".list-blog-result .swiper-btn-next",
        prevEl: ".list-blog-result .swiper-btn-prev",
      },
    });
  },
  slideBlogNews: function () {
    if (typeof $(".slider-blogs") === "undefined") return;
    const sliderBlogs = new Swiper(".slider-blogs", {
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 6,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".slider-blogs .swiper-btn-next",
        prevEl: ".slider-blogs .swiper-btn-prev",
      },
      pagination: {
        el: ".slider-blogs .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });
  },
  slideJob: function () {
    if (typeof $(".slide-job") === "undefined") return;
    const swiperBanner = new Swiper(".slide-job", {
      slidesPerView: 1,
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 0,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".slide-job-next",
        prevEl: ".slide-job-prev",
      },
    });
  },
  slideMentor: function () {
    if (typeof $(".slide-profile__mentor") === "undefined") return;
    const swiperBanner = new Swiper(".slide-profile__mentor", {
      slidesPerView: 1,
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 8,
      effect: "fade",
    });
  },
  slideBanners: function () {
    if (typeof $(".slider-banners") === "undefined") return;
    const slideBanners = new Swiper(".slider-banners", {
      slidesPerView: 1,
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 0,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".banners .slide-job-next",
        prevEl: ".banners .slide-job-prev",
      },
    });
  },
  slideGoodJob: function () {
    if (typeof $(".slide-good-job") === "undefined") return;
    var countItemChild = $(".slide-good-job .swiper-slide")
      .length;
    const sliderBlogs = new Swiper(".slide-good-job", {
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 1.2,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".slider-blogs .swiper-btn-next",
        prevEl: ".slider-blogs .swiper-btn-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
        992: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 3.1,
          spaceBetween: 16,
          slidesPerColumn: countItemChild >= 6 ? 2 : 1,
        },
        1280: {
          slidesPerView: 3.1,
          spaceBetween: 16,
          slidesPerColumn: countItemChild >= 6 ? 2 : 1,
        },
      },
    });
  },
  slideCompany: function () {
    if (typeof $(".slide-company") === "undefined") return;
    var countItemChild = $(".slide-company .swiper-slide").length;

    const sliderBlogs = new Swiper(".slide-company", {
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 1.2,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-company__next",
        prevEl: ".swiper-company__prev",
      },
      pagination: {
        el: ".pagination-company",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        992: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 16,
          loop: true,
          centeredSlides: true,
        },
      },
    });
  },
  slideEmployer: function () {
    if (typeof $(".slide-employer") === "undefined") return;
    var countItemChild = $(".slide-employer .swiper-slide")
      .length;
    const sliderBlogs = new Swiper(".slide-employer", {
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 3,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-employer__next",
        prevEl: ".swiper-employer__prev",
      },
      pagination: {
        el: ".pagination-employer",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 16,
          slidesPerColumn: countItemChild >= 6 ? 2 : 1,
        },
      },
    });
  },
  slideProfile: function () {
    if (typeof $(".slide-profile") === "undefined") return;
    var countItemChild = $(".slide-profile .swiper-slide").length;
    const sliderBlogs = new Swiper(".slide-profile", {
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 1.2,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".slider-blogs .swiper-btn-next",
        prevEl: ".slider-blogs .swiper-btn-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
        992: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 3.1,
          spaceBetween: 16,
          slidesPerColumn: countItemChild >= 9 ? 3 : 1,
        },
      },
    });
  },
  slideBannerNew: function () {
    if (typeof $(".slide-banner-new") === "undefined") return;
    const sliderBlogs = new Swiper(".slide-banner-new", {
      disableOnInteraction: true,
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 16,
      watchSlidesProgress: true,
      pagination: {
        el: ".pagination-new-service",
        clickable: true,
      },
    });
  },
  slideNewService: function () {
    if (typeof $(".slide-new__service") === "undefined") return;
    const sliderBlogs = new Swiper(".slide-new__service", {
      disableOnInteraction: true,
      speed: 600,
      slidesPerView: 1.2,
      spaceBetween: 8,

      watchSlidesProgress: true,
      navigation: {
        nextEl: ".new-service-next",
        prevEl: ".new-service-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
        992: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    });
  },
  init: function () {
    SLIDER.slideRecruitment();
    SLIDER.slideRoadmap();
    SLIDER.slideIds();
    SLIDER.slideSugest();
    SLIDER.slideBlog();
    SLIDER.slideBlogNews();
    SLIDER.slideJob();
    SLIDER.slideMentor();
    SLIDER.slideBanners();
    // SLIDER.slideGoodJob();
    SLIDER.slideCompany();
    SLIDER.slideEmployer();
    SLIDER.slideProfile();
    SLIDER.slideBannerNew();
    SLIDER.slideNewService();
  },
};
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    SLIDER.init();
  }, 100);
})