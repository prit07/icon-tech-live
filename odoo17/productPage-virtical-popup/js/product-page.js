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


  
//   Variants Popup start
  $("#openPopup").click(function () {
    $("#variants-popup").css("display", "block");
  });

  $(".variants-close-btn").click(function () {
    $("#variants-popup").css("display", "none");
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

  // variants-Option

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

  $("#openPopup").click(function () {
    var demoTriggers = document.querySelectorAll('.variants-color-trigger');
    var zoomEffect = document.querySelector('.detail-zoom-effect');
    var zoomLens = document.createElement('div');
    zoomLens.className = 'zoom-lens';
    document.body.appendChild(zoomLens);
   console.log(demoTriggers);
    var zoomedImage = document.createElement('img');
    zoomedImage.className = 'zoomed-image';
    zoomEffect.appendChild(zoomedImage);

    demoTriggers.forEach(function(demoTrigger) {
        demoTrigger.addEventListener('mousemove', moveLens);
        demoTrigger.addEventListener('mouseleave', function () {
            zoomLens.style.display = 'none';
            zoomEffect.style.display = 'none';
        });
        demoTrigger.addEventListener('mouseenter', function () {
            zoomLens.style.display = 'block';
            zoomEffect.style.display = 'block';
            zoomedImage.src = demoTrigger.src; // Update the zoomed image source
            zoomedImage.onload = function () {
                zoomedImage.style.width = zoomedImage.naturalWidth + 'px';
                zoomedImage.style.height = zoomedImage.naturalHeight + 'px';
            };
        });
    });

    function moveLens(e) {
        console.log(e);
        var demoTrigger = e.target;
        var pos = getCursorPos(e, demoTrigger);
        var x = pos.x - (zoomLens.offsetWidth / 2);
        var y = pos.y - (zoomLens.offsetHeight / 2);

        // Prevent the lens from being positioned outside the image
        if (x > demoTrigger.width - zoomLens.offsetWidth) {
            x = demoTrigger.width - zoomLens.offsetWidth;
        }
        if (x < 0) {
            x = 0;
        }
        if (y > demoTrigger.height - zoomLens.offsetHeight) {
            y = demoTrigger.height - zoomLens.offsetHeight;
        }
        if (y < 0) {
            y = 0;
        }

        zoomLens.style.left = x + 'px';
        zoomLens.style.top = y + 'px';
        zoomLens.style.display = 'block';

        // Calculate the zoom ratio based on the lens size and zoom effect size
        var cx = zoomEffect.offsetWidth / zoomLens.offsetWidth;
        var cy = zoomEffect.offsetHeight / zoomLens.offsetHeight;

        zoomedImage.style.width = demoTrigger.width * cx + 'px';
        zoomedImage.style.height = demoTrigger.height * cy + 'px';
        zoomedImage.style.left = -(x * cx) + 'px';
        zoomedImage.style.top = -(y * cy) + 'px';
    }

    function getCursorPos(e, demoTrigger) {
        var a = demoTrigger.getBoundingClientRect();
        var x = e.clientX - a.left;
        var y = e.clientY - a.top;
        return { x: x, y: y };
    }
  });

// Variants Popup End

})



