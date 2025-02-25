$(document).ready(function () {

  // Owl product Slider
  $(".owl-product-carousel").owlCarousel({
    loop: true,
    items: 1,
    margin: 0,
    stagePadding: 0,
    autoplay: false
  });

  $('.owl-product-carousel .owl-dot').hover(
    function () {
      $(this).addClass('active');
      var dotIndex = $(this).index();
      $(".owl-product-carousel").trigger('to.owl.carousel', [dotIndex, 300]);
    },
    function () {
      $(this).removeClass('active');
    }
  );

  dotcount = 1;
  $('.owl-product-carousel .owl-dot').each(function () {
    $(this).addClass('dotnumber' + dotcount);
    $(this).attr('data-info', dotcount);
    dotcount = dotcount + 1;
  });

  slidecount = 1;
  $('.owl-product-carousel .owl-item').not('.cloned').each(function () {
    $(this).addClass('slidenumber' + slidecount);
    slidecount = slidecount + 1;
  });

  $('.owl-product-carousel .owl-dot').each(function () {
    grab = $(this).data('info');
    slidegrab = $('.slidenumber' + grab + ' img').attr('src');
    $(this).css("background-image", "url(" + slidegrab + ")");
  });

  amount = $('.owl-product-carousel .owl-dot').length;
  gotowidth = 100 / amount;
  $('.owl-product-carousel .owl-dot').css("height", gotowidth + "%");




// product-page-tabs

  $('.product-page-tabs li').click(function () {
    $('.product-page-tabs li').removeClass('active');
    $('.product-content').removeClass('active');
    var tid = $(this).attr('tab');
    $(this).addClass('active');
    $('#' + tid).addClass('active');
  });



  // Variants Popup
  $("#openPopup").click(function () {
    $("#variants-popup").css("display", "block");
  });


  $(window).click(function (event) {
    if (event.target === $("#variants-popup")[0]) {
      $("#variants-popup").css("display", "none");
    }
  });

  // jQuery(".variants-popup_accordion_item:first-child").addClass("active").children(".variants-popup_content").slideDown();
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

});





