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


//   document.querySelectorAll('.product-page-tabs li').forEach(function(tab) {
//     tab.addEventListener('click', function() {
//         // Remove 'active' class from all tabs and content
//         document.querySelectorAll('.product-page-tabs li').forEach(function(item) {
//             item.classList.remove('active');
//         });
//         document.querySelectorAll('.product-content').forEach(function(content) {
//             content.classList.remove('active');
//         });

//         // Get the tab ID from the clicked element
//         var tabId = this.getAttribute('tab');

//         // Add 'active' class to the clicked tab and corresponding content
//         this.classList.add('active');
//         document.getElementById(tabId).classList.add('active');

//         // Scroll to the corresponding content section
//         var target = document.getElementById(tabId);

//         if (target) {
//             // Adjust the scroll position with an additional offset (e.g., 300px from the top)
//             var scrollOffset = target.getBoundingClientRect().top + window.scrollY - 300; // Adjust this offset as needed

//             // Smooth scrolling to the target
//             window.scrollTo({
//                 top: scrollOffset,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });


// product-page-tabs 

$(document).ready(function () { 
  $('.product-page-tabs li').click(function () {
      $('.product-page-tabs li').removeClass('active');
      $('.product-content').removeClass('active');
      var tabId = $(this).attr('tab');
      $(this).addClass('active');
      $('#' + tabId).addClass('active');

      var target = $('#' + tabId);
      if (target.length) {
          var scrollOffset = 750; 

          if (window.innerWidth <= 991 && window.innerWidth > 425) {
              scrollOffset = 800; 
          } else if (window.innerWidth <= 425 && window.innerWidth > 375) {
              scrollOffset = 600; 
          } else if (window.innerWidth <= 375) {
              scrollOffset = 600; 
          }
           console.log(scrollOffset);
           

          $('html, body').animate({
              scrollTop: scrollOffset,
          }, 500); 
      }
  });
}); 
// $(document).ready(function() {
//   let isAnimating = false; // Prevent multiple clicks during animation

//   $('.product-page-tabs li').click(function () {
//       if (isAnimating) return; // Exit if already animating

//       isAnimating = true; // Set flag to indicate animation is in progress

//       // Remove active class from all tabs and content
//       $('.product-page-tabs li').removeClass('active');
//       $('.product-content').removeClass('active');

//       // Get the target ID
//       var tid = $(this).attr('tab');
//       $(this).addClass('active'); // Add active class to clicked tab
//       $('#' + tid).addClass('active'); // Show the corresponding content

//       // Calculate the scroll position
//       var offset = 200; // Adjust for fixed headers
//       var targetOffset = $('#' + tid).offset().top - offset;


//       console.log(targetOffset);
      

//       // Animate the scroll
//       $('html, body').animate({
//           scrollTop: targetOffset
//       }, 600, function() {
//           isAnimating = false; // Reset the flag after animation is complete
//       });
//   });
// });

// $('.product-page-tabs li').click(function () {
//   $('.product-page-tabs li').removeClass('active');
//   $('.product-content').removeClass('active');
//   var tid = $(this).attr('tab');
//   $(this).addClass('active');
//   $('#' + tid).addClass('active');
// $('html, body').animate({
//   scrollTop: jQuery(this.hash).offset().top
// }, 500); // Adjust the duration (500 ms) as needed
// });

// });


// $('.product-page-tabs li').click(function () {
//   // Remove 'active' class from all tabs and content
//   $('.product-page-tabs li').removeClass('active');
//   $('.product-content').removeClass('active');

//   // Get the tab ID from the clicked element
//   var tabId = $(this).attr('tab');

//   // Add 'active' class to the clicked tab and corresponding content
//   $(this).addClass('active');
//   $('#' + tabId).addClass('active');

//   // Scroll to the corresponding content section
//   var target = $('#' + tabId);

//   if (target.length) {
//       // Adjust the scroll position with an additional offset (e.g., 100px from the top)
//       var scrollOffset = 750; // Adjust this offset as needed

//       // Smooth scrolling to the target
//       $('html, body').animate({
//           scrollTop: scrollOffset
//       }, 500); // Duration of the scroll (500 ms)
//   }
// });


// 


  // Variants Popup
  $("#openPopup").click(function () {
    $("#variants-popup").css("display", "block");
  });

  /*============================*/
  // Variants tab option
  jQuery('.variants-popup_content ul li').click(function(){
    jQuery('.variants-popup_content ul li').removeClass('active');
    jQuery('.variants-main-card').removeClass('active');
    var tid=jQuery(this).attr('data-tab');
    jQuery(this).addClass('active');
    jQuery('#' +tid).addClass('active');
  });


  jQuery('.color-variant-main').click(function(){
    jQuery('.variants-popup_content').slideUp();
    jQuery('.variants-main-card').removeClass('active');
    var img_a = jQuery(this).find('img').attr("src");
    jQuery(this).closest('.variants-popup_accordion_item').find('.variants-popup_menu').addClass('variants-selected').removeClass('variants-popup_menu');
    jQuery(this).closest('.variants-popup_accordion_item').find('a img').attr('src', img_a)
  });
  jQuery('.color-variant-main').click(function(){
    jQuery('.variants-selected').on("click",function(){
      console.log('addad');
      jQuery(this).removeClass('variants-selected').addClass('variants-popup_menu');
    });
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

});



// document.addEventListener("DOMContentLoaded", function () {
 
//   var demoTriggers = document.querySelectorAll('.variants-color-trigger');
//   var paneContainer = document.querySelector('.detail-zoom-effect');

//   demoTriggers.forEach(function (demoTrigger) {
//     demoTrigger.addEventListener('mouseenter' , (e) => {
//       e.stopPropagation();
//     } )
// });

//   demoTriggers.forEach(function (demoTrigger) {
//       new Drift(demoTrigger, {
//           paneContainer: paneContainer,
//           zoomFactor: 12,
//           inlinePane: false,
//           hoverBoundingBox: true,
//       });
//   });
// });


// drift.setZoomImageURL(frames[currentFrame]);
// triggerEl.setAttribute("data-zoom", frames[currentFrame]);


// var triggerEl = document.querySelectorAll(".variants-color-trigger");
// var drift = new Drift(triggerEl, {
//     paneContainer: document.querySelector(".detail-zoom-effect"),
//     zoomFactor: 12,
//     inlinePane: false,
//     hoverBoundingBox: true,
// });




// document.addEventListener("DOMContentLoaded", function () {
//   var demoTriggers = document.querySelectorAll('.variants-color-trigger');
//   var paneContainer = document.querySelector('.detail-zoom-effect');

//   demoTriggers.forEach(function (demoTrigger) {
//       new Drift(demoTrigger, {
//         paneContainer: paneContainer,
//         zoomFactor: 12,
//         inlinePane: false,
//         hoverBoundingBox: true,
//       });

//       demoTrigger.addEventListener('mouseenter', function () {
//           paneContainer.style.opacity = 1;
//       });

//       demoTrigger.addEventListener('mouseleave', function () {
//           paneContainer.style.opacity = 0;
//       });
//   });
// });








// document.addEventListener("DOMContentLoaded", function () {
//   var demoTriggers = document.querySelectorAll('.variants-color-trigger');
//   var paneContainer = document.querySelector('.detail-zoom-effect');

//   if (!demoTriggers.length) {
//       console.error('No images found with class .variants-color-trigger');
//       return;
//   }

//   demoTriggers.forEach(function (demoTrigger) {
//       if (!demoTrigger.dataset.zoom) {
//           console.error('No data-zoom attribute found on', demoTrigger);
//           return;
//       }

//       new Drift(demoTrigger, {
//           paneContainer: paneContainer,
//           inlinePane: false,
//           zoomFactor: 12,
//           hoverBoundingBox: true
//       });
//   });
// });








// document.addEventListener("DOMContentLoaded", function () {
//   var demoTriggers = document.querySelectorAll('.variants-color-trigger');
//   var paneContainer = document.querySelector('.detail-zoom-effect');

//   if (!demoTriggers.length) {
//       console.error('No images found with class .variants-color-trigger');
//       return;
//   }

//   demoTriggers.forEach(function (demoTrigger) {
//       if (!demoTrigger.dataset.zoom) {
//           console.error('No data-zoom attribute found on', demoTrigger);
//           return;
//       }


//       new Drift(demoTrigger, {
//           paneContainer: paneContainer,
//           inlinePane: false,
//           zoomFactor: 10,
//           hoverBoundingBox: true
//       });


//       if (typeof ZoomOdoo === 'function') {
//           var zoomOdooInstance = new ZoomOdoo({
//               target: demoTrigger, 
//               opts: {
//                   event: 'mouseenter',
//                   preventClicks: true 
//               }
//           });
//           zoomOdooInstance._init();
//       }
//   });
// });
