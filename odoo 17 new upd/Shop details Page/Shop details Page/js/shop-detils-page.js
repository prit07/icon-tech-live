$(document).ready(function () {
  /* menu js start*/
  $(".shop-page-detils-open-btn").click(function (e) {
    e.preventDefault();
    $(".shop-page-detils-right").toggleClass("shop-detils-right-active");
    $(".shop-page-detils-open-btn").removeClass("shop-detils-open");
    $(".shop-page-detils-left").toggleClass("shop-page-detils-left-active");
    $(".shop-page-detils-colos-btn").removeClass("shop-detils-open");
    $(".shop-page-detils-right-items").removeClass("shop-page-detils-none");
    $('body').toggleClass('shop-detils-open-nav');

    $('.owl-shop-page-main-slider').trigger('refresh.owl.carousel');
  });

  $('#shop-detils-close').click(function () {
    $(".shop-page-detils-right").removeClass("shop-detils-right-active");
    $(".shop-page-detils-left").toggleClass("shop-page-detils-left-active");
    $(".shop-page-detils-open-btn").removeClass("shop-detils-open");
    $(".shop-page-detils-colos-btn").addClass("shop-detils-open");
    $(".shop-page-detils-right-items").addClass("shop-page-detils-none");
    $('body').removeClass('shop-detils-open-nav');

    // Refresh the Owl Carousel
    $('.owl-shop-page-main-slider').trigger('refresh.owl.carousel');
  });


  if (window.matchMedia("(max-width: 991px)").matches) {
    $(".shop-page-detils-open-btn").click(function (e) {
      $('body').toggleClass('shop-detils-open-nav');
    });
    $('#shop-detils-close').click(function () {
      $(".shop-page-detils-right").addClass("shop-detils-right-active");
      $('body').removeClass('shop-detils-open-nav');
    });
  }




  // faq right sider
  jQuery(".shop_detils_faq_accordion_item .shop_detils_faq_menu").on("click", function () {
    if (jQuery(this).parent().hasClass("shop_detils_active")) {
      jQuery(this).next().slideUp();
      jQuery(this).parent().removeClass("shop_detils_active");
    }
    else {
      jQuery(".shop_detils_faq_content").slideUp();
      jQuery(".shop_detils_faq_accordion_item").removeClass("shop_detils_active");
      jQuery(this).parent().addClass("shop_detils_active");
      jQuery(this).next().slideDown();
    }
  });

  // faq blog sider
  jQuery(".shop_detils_faq_main_item .shop_detils_faq_main_menu").on("click", function () {
    if (jQuery(this).parent().hasClass("shop_detils_main_active")) {
      jQuery(this).next().slideUp();
      jQuery(this).parent().removeClass("shop_detils_main_active");
    }
    else {
      jQuery(".shop_detils_faq_main_content").slideUp();
      jQuery(".shop_detils_faq_main_item").removeClass("shop_detils_main_active");
      jQuery(this).parent().addClass("shop_detils_main_active");
      jQuery(this).next().slideDown();
    }
  });


  // icon page open close 
  $("#shop-detils-ios-share ").click(function (e) {
    e.preventDefault();
    $("#shop-social-media-icon").css("display", "flex");
    $(".shop-page-detils-left").toggleClass("shop-page-detils-left-active");
    $(".shop-page-detils-right").toggleClass("shop-detils-right-active");
    $(".shop-page-detils-right-items").addClass("shop-detils-icon-n");
    $(".shop-page-detils-colos-btn").addClass("shop-detils-open");
    // $(".shop-page-detils-right-items").addClass("shop-page-detils-none");
    $('.owl-shop-page-main-slider').trigger('refresh.owl.carousel');
  });

  $(".shop-detils-close-btn").click(function () {
    $("#shop-social-media-icon").css("display", "none");
    $(".shop-page-detils-left").removeClass("shop-page-detils-left-active");
    $(".shop-page-detils-right").addClass("shop-detils-right-active");
    $(".shop-page-detils-right-items").removeClass("shop-detils-icon-n");
    $(".shop-page-detils-colos-btn").removeClass("shop-detils-open");
    $('.owl-shop-page-main-slider').trigger('refresh.owl.carousel');

  });

  // Initialize the Owl Carousel
  var owl = $('.owl-shop-page-main-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
  });
  // Add click event for images
  $('.shop-page-detils-left-img img').click(function () {
    owl.trigger('next.owl.carousel');
  });

  // owl-shop-faq-slider
  jQuery('.owl-shop-faq-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  })


  //   var swiper = new Swiper(".swiper", {
  //     effect: "coverflow",
  //     grabCursor: true,
  //     centeredSlides: true,
  //     coverflowEffect: {
  //         rotate: 0,
  //         stretch: 110,
  //         depth: 700,
  //         modifier: 1.5,
  //         slideShadows: false,
  //     },
  //     loop: true,
  //     navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev"
  //     },
  //     pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true
  //     },
  //     keyboard: {
  //         enabled: true
  //     },
  //     mousewheel: {
  //         thresholdDelta: 70
  //     },
  //     breakpoints: {
  //         560: { slidesPerView: 1 },
  //         768: { slidesPerView: 1.3, },
  //         1024: {  slidesPerView: 1.5  }
  //     }
  // });


  // var swiper = new Swiper('.swiper-container.two', {
  //   pagination: '.swiper-pagination',
  //   paginationClickable: true,
  //   effect: 'coverflow',
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   loop: true,
  //   centeredSlides: true,
  //   slidesPerView: 1.8, // Set to show exactly 5 items
  //   coverflow: {
  //     rotate: 0,
  //     stretch: 100,
  //     depth: 150,
  //     modifier: 3.5,
  //     slideShadows: false,
  //   }
  // });


  // virtical popup
  var buttonPluspl = $(".variants-popup-bottom-qty-btn-plus");
  var buttonMinuspl = $(".variants-popup-bottom-qty-btn-minus");
  var incrementPluspl = buttonPluspl.click(function () {
    var $n = $(this).parent(".variants-popup-bottom-qty-container").find(".variants-popup-bottom-input-qty");
    $n.val(Number($n.val()) + 1);
  });
  var incrementMinuspl = buttonMinuspl.click(function () {
    var $n = $(this).parent(".variants-popup-bottom-qty-container").find(".variants-popup-bottom-input-qty");
    var amount = Number($n.val());
    if (amount > 0) {
      $n.val(amount - 1);
    }
  });


  $("#openPopup , .filter-overlay-bg").click(function () {
    $("#variants-popup").css("display", "flex");
    $('.filter-overlay-bg').toggleClass('filter-bg-active');
    $(".shop-page-detils-left").toggleClass("shop-page-detils-left-active");
    $(".shop-page-detils-right").toggleClass("shop-detils-right-active");
    $(".shop-page-detils-right-items").addClass("shop-detils-icon-n");
    $(".shop-page-detils-colos-btn").addClass("shop-detils-open");
    // $(".shop-page-detils-right-items").addClass("shop-page-detils  -none");
    $('.owl-shop-page-main-slider').trigger('refresh.owl.carousel');

  });

  $(".variants-close-btn , .filter-overlay-bg").click(function () {
    $("#variants-popup").css("display", "none");
    $('.filter-overlay-bg').removeClass('filter-bg-active');
    $(".shop-page-detils-left").removeClass("shop-page-detils-left-active");
    $(".shop-page-detils-right").addClass("shop-detils-right-active");
    $(".shop-page-detils-right-items").removeClass("shop-detils-icon-n");
    $(".shop-page-detils-colos-btn").removeClass("shop-detils-open");
    $('.owl-shop-page-main-slider').trigger('refresh.owl.carousel');
  });

  /*============================*/
  // Variants tab option
  jQuery('.variants-popup_content ul li').click(function () {
    jQuery('.variants-popup_content ul li').removeClass('active');
    jQuery('.variants-main-card').removeClass('active').slideUp();
    var tid = jQuery(this).attr('data-tab');
    jQuery(this).addClass('active');
    jQuery('#' + tid).slideDown().addClass('active');
  });


  // select variant image path update 
  $('.color-variant-main').click(function () {
    $('.variants-popup_content').slideUp();
    $('.variants-main-card').removeClass('active');
    $(".variants-select-color option:first").prop("selected", "selected");
  });


  jQuery(".variants-popup_accordion_item .variants-popup_menu").on("click", function () {
    if (jQuery(this).parent().hasClass("active")) {
      jQuery(this).next().slideUp();
      jQuery(this).parent().removeClass("active");
    }
    else {
      jQuery(".variants-popup_content").slideUp();
      jQuery(".variants-popup_accordion_item").removeClass("active");
      jQuery(this).parent().addClass("active");
      jQuery(this).next().slideDown();
    }
  });

  // variants-Option

  $('.variants-popup_content-dimensions li').click(function () {
    $('.variants-popup_content').slideUp();
    jQuery('.variants-popup_accordion_item').removeClass("active");
    var selectedOption = $(this).text();
    $(this).closest('.variants-popup_accordion_item').find('.variants-popup_menu-dimensions').addClass('variants-Option').removeClass('variants-popup_menu-dimensions');
  });

})


document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 110,
      depth: 750,
      modifier: 1.5,
      slideShadows: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    // mousewheel: {
    //   thresholdDelta: 70,
    // },
    breakpoints: {
      560: { slidesPerView: 1 },
      768: { slidesPerView: 1.3 },
      1024: {
        slidesPerView: 1.4,
        coverflowEffect: {
          rotate: 0,
          stretch: 110,
          depth: 750,
          modifier: 1.5,
          slideShadows: false,
        },
      },
      1200: {slidesPerView: 1.5, coverflowEffect: { depth: 695 } },
      1440: {    slidesPerView: 1.5, coverflowEffect: { depth: 735 }},
      1500: {   slidesPerView: 1.5, coverflowEffect: { depth: 750 } },
    }
    // on: {
    //     slideChangeTransitionStart: function () {
    //         const slides = document.querySelectorAll(".swiper-slide");
    //         const activeIndex = this.activeIndex; // Ensure `this` refers to Swiper instance

    //         slides.forEach((slide, index) => {
    //             const slideIndex = parseInt(slide.getAttribute("data-swiper-slide-index"));

    //             if (index === activeIndex) {
    //                 // Active slide
    //                 slide.style.transform = slide.style.transform.replace(/scale\([^)]+\)/, "scale(1)");
    //                 slide.style.transform = slide.style.transform.replace(/translate3d\([^)]*\)/, "translate3d(0px, 0px, 0px)");
    //             } else if (index === (activeIndex + 1) % slides.length) {
    //                 // Next slide
    //                 slide.style.transform = slide.style.transform.replace(/scale\([^)]+\)/, "scale(0.8)");
    //                 slide.style.transform = slide.style.transform.replace(/translate3d\([^)]*\)/, "translate3d(200px, 0px, -200px)");
    //             } else if (index === (activeIndex - 1 + slides.length) % slides.length) {
    //                 // Previous slide
    //                 slide.style.transform = slide.style.transform.replace(/scale\([^)]+\)/, "scale(0.8)");
    //                 slide.style.transform = slide.style.transform.replace(/translate3d\([^)]*\)/, "translate3d(-200px, 0px, -200px)");
    //             } else {
    //                 // Other slides
    //                 slide.style.transform = slide.style.transform.replace(/scale\([^)]+\)/, "scale(0.6)");
    //                 slide.style.transform = slide.style.transform.replace(/translate3d\([^)]*\)/, "translate3d(0px, 0px, -400px)");
    //             }
    //         });
    //     },
    // },
  });
});
