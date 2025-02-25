$(document).ready(function () {
  $(".shop-page-detils-open-btn").click(function (e) {
    e.preventDefault();
    $(".shop-page-detils-right").toggleClass("shop-detils-right-active");
    $(".shop-page-detils-open-btn").removeClass("shop-detils-open");
    $(".shop-page-detils-left").toggleClass("shop-page-detils-left-active");
    $(".shop-page-detils-colos-btn").removeClass("shop-detils-open");
    $(".shop-page-detils-right-items").removeClass("shop-page-detils-none");
    $('.owl-shop-page-main-slider').trigger('refresh.owl.carousel');
  });

  $('#shop-detils-close').click(function () {
    $(".shop-page-detils-right").removeClass("shop-detils-right-active");
    $(".shop-page-detils-left").toggleClass("shop-page-detils-left-active");
    $(".shop-page-detils-open-btn").removeClass("shop-detils-open");
    $(".shop-page-detils-colos-btn").addClass("shop-detils-open");
    $(".shop-page-detils-right-items").addClass("shop-page-detils-none");
    $('.owl-shop-page-main-slider').trigger('refresh.owl.carousel');
  });

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



  var swiper = new Swiper('.swiper-container.two', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'coverflow',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.8, // Set to show exactly 5 items
    coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 3.5,
      slideShadows: false,
    }
  });


  // jQuery(".filter-sidebar_accordion_item:first-child").addClass("active").children(".filter-sidebar_content").slideDown();
  // jQuery(".filter-sidebar_accordion_item .filter-sidebar_menu").on("click", function () {
  //   if (jQuery(this).parent().hasClass("active")) {
  //     jQuery(this).next().slideUp();
  //     jQuery(this).parent().removeClass("active");
  //   }
  //   else {
  //     jQuery(".filter-sidebar_content").slideUp();
  //     jQuery(".filter-sidebar_accordion_item").removeClass("active");
  //     jQuery(this).parent().addClass("active");
  //     jQuery(this).next().slideDown();
  //   }
  // })

  // subcategory start
  // jQuery(".filter-sub-faq_accordion_item .filter-sub-faq_menu").on("click", function () {
  //   if (jQuery(this).parent().hasClass("active")) {
  //     jQuery(this).next().slideUp();
  //     jQuery(this).parent().removeClass("active");
  //   }
  //   else {
  //     jQuery(".filter-sub-faq_content").slideUp();
  //     jQuery(".filter-sub-faq_accordion_item ").removeClass("active");
  //     jQuery(this).parent().addClass("active");
  //     jQuery(this).next().slideDown();
  //   }
  // });

})


