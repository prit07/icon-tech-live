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

  /*============================*/
  // Variants tab option
  jQuery('.variants-popup_content ul li').click(function () {
    jQuery('.variants-popup_content ul li').removeClass('active');
    jQuery('.variants-main-card').removeClass('active');
    var tid = jQuery(this).attr('data-tab');
    jQuery(this).addClass('active');
    jQuery('#' + tid).addClass('active');
  });


  // jQuery('.color-variant-main').click(function () {
  //   jQuery('.variants-popup_content').slideUp();
  //   jQuery('.variants-main-card').removeClass('active');
  //   var img_a = jQuery(this).find('img').attr("src");
  //   jQuery(this).closest('.variants-popup_accordion_item').find('.variants-popup_menu').addClass('variants-selected').removeClass('variants-popup_menu');
  //   jQuery(this).closest('.variants-popup_accordion_item').find('a img').attr('src', img_a)
  // });
  jQuery('.color-variant-main').click(function () {
    jQuery('.variants-selected').on("click", function () {
      console.log('addad');
      jQuery(this).removeClass('variants-selected').addClass('variants-popup_menu');
    });
  });

  // select variant image path update 
  $('.color-variant-main').click(function () {
    $('.variants-popup_content').slideUp();
    $('.variants-main-card').removeClass('active');
    $(".variants-select-color option:first").prop("selected", "selected");
    var img_a = $(this).find('img').attr("src");
    $(this).closest('.variants-popup_accordion_item').find('.variants-popup_menu').addClass('variants-selected').removeClass('variants-popup_menu');
    $(this).closest('.variants-popup_accordion_item').find('a img').attr('src', img_a)
  });


  // select box js
  $('.variants-popup_accordion_item ').on('change', function () {
    $('.variants-main-card').removeClass('active');
    var select_id = $(this).children('option:selected').attr('data-tab');
    $(this).addClass('active');
    $('#' + select_id).addClass('active');
  });



  /*===============================*/
  $(window).click(function (event) {
    if (event.target === $("#variants-popup")[0]) {
      $("#variants-popup").css("display", "none");
    }
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


  // 

  $('.variants-popup_content-dimensions li').click(function () {
    $('.variants-popup_content').slideUp();
    var selectedOption = $(this).text();
    $(this).closest('.variants-popup_accordion_item').find('.variants-popup_menu-dimensions').addClass('variants-Option').removeClass('variants-popup_menu-dimensions');
    $(this).closest('.variants-popup_accordion_item').find('a').text(selectedOption);
  });

  $('.variants-popup_accordion_item').on("click", ".variants-Option", function (e) {
    e.preventDefault();
    var originalText = $(this).find('a').data('name');
    $(this).find('a').text(originalText);
    $(this).addClass('variants-popup_menu-dimensions').removeClass('variants-Option');
  });

})



