$(document).ready(function () {
  /* menu js start*/
  $("#filter-toggle-btn, .filter-overlay-bg").click(function (e) {
    e.preventDefault();
    $(".filter-toggle-btn").toggleClass("open");
    $("#filter-sidebar-wrapper").toggleClass("filter-menu-active");
    $('.filter-overlay-bg').toggleClass('filter-bg-active');
    $('body').toggleClass('open-nav');
  });

  $('#close-sidebar').click(function () {
    $('#filter-sidebar-wrapper').removeClass('filter-menu-active');
    $('.filter-overlay-bg').removeClass('filter-bg-active');
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


