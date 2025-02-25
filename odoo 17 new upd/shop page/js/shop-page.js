$(document).ready(function () {
  /* menu js start*/
  $("#filter-toggle-btn, .filter-overlay-bg").click(function (e) {
    e.preventDefault();
    $(".shop-page-siderbar-wapper").toggleClass("main-sidebar");
    $(".shop-page-sidebar").toggleClass("open");
    $("#shop-page-sidebar-wrapper").toggleClass("shop-page-menu-active");
    $('body').toggleClass('open-nav');
  });

  $('#close-sidebar').click(function () {
    $(".shop-page-siderbar-wapper").removeClass("main-sidebar");
    $('#shop-page-sidebar-wrapper').removeClass('shop-page-menu-active');
    $(".shop-page-sidebar").removeClass("open");
    $('body').toggleClass('open-nav');
  });


  // jQuery(".filter-sidebar_accordion_item:first-child").addClass("active").children(".filter-sidebar_content").slideDown();
  jQuery(".filter-sidebar_accordion_item .filter-sidebar_menu").on("click", function () {
    if (jQuery(this).parent().hasClass("active")) {
      jQuery(this).next().slideUp();
      jQuery(this).parent().removeClass("active");
    }
    else {
      jQuery(".filter-sidebar_content").slideUp();
      jQuery(".filter-sidebar_accordion_item").removeClass("active");
      jQuery(this).parent().addClass("active");
      jQuery(this).next().slideDown();
    }
  })

  // subcategory start
  jQuery(".filter-sub-faq_accordion_item .filter-sub-faq_menu").on("click", function () {
    if (jQuery(this).parent().hasClass("active")) {
      jQuery(this).next().slideUp();
      jQuery(this).parent().removeClass("active");
    }
    else {
      jQuery(".filter-sub-faq_content").slideUp();
      jQuery(".filter-sub-faq_accordion_item ").removeClass("active");
      jQuery(this).parent().addClass("active");
      jQuery(this).next().slideDown();
    }
  });

})


