$(document).ready(function () {

    // Banner Slidr
    $('.owl-banner-page').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
        items: 1
    })


    // WHY CHOOSE US
    $('.chart-main').each(function () {
        var percent = $(this).data('percent');
        $(this).append('<span class="chart-value">' + percent + '%</span>');
    });

    $('.chart-main').easyPieChart({
        size: 160,
        barColor: "#FFF",
        scaleLength: 0,
        trackColor: "#333333",
        lineCap: "circle",
        lineWidth: 12,
        lineCap: "round",
        animate: 2000,
        gap: 7,
    }); 

    // Digital Marketing Counter
    // $.fn.jQuerySimpleCounter = function (options) {
    //     var settings = $.extend({
    //         start: 0,
    //         end: 100,
    //         easing: 'swing',
    //         duration: 400,
    //         complete: ''
    //     }, options);

    //     var thisElement = $(this);

    //     $({ count: settings.start }).animate({ count: settings.end }, {
    //         duration: settings.duration,
    //         easing: settings.easing,
    //         step: function () {
    //             var mathCount = Math.ceil(this.count);
    //             thisElement.text(mathCount);
    //         },
    //         complete: settings.complete
    //     });
    // };


    // $('#number1').jQuerySimpleCounter({ end: 1000, duration: 4000 });
    // $('#number2').jQuerySimpleCounter({ end: 750, duration: 4000 });
    // $('#number3').jQuerySimpleCounter({ end: 8, duration: 4000 });
    // $('#number4').jQuerySimpleCounter({ end: 99978, duration: 4000 });



    // Digital Marketing Position slider
    $('.owl-marketing-positions').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600: {
                items:2
            },
            800:{
                items:3
            },
            1200:{
                items:5
            }
        }
    })


    // Testimonal Slider3

    $('.owl-testimonal').owlCarousel({
        center: true,
       
        loop:true,
        margin:30,
        responsive:{
            0:{
                items:1.2,
                margin:20
            },
            600:{
                items:1.5,
            },
            1100:{
                items:2.3,
           }
        }
    });
    
    // testimonal Stars Rating
    $('.testimonal-stars-rating').each(function (event) {
        var rating = $(this).attr('rating');
        var i;
        for (i = 0; (i < rating); i++) {
            $(this).find('span.star').eq(i).addClass('filled');
        }
        if (rating % 1 > 0)
            $(this).find('span.star').eq(i - 1).addClass('half-filled');
    });

})


$(document).ready(function(){
    var sectionOffset = $('#projectFacts').offset().top; // Get the offset of the target section

    // Define the counter function
    $.fn.jQuerySimpleCounter = function (options) {
      var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
      }, options);

      var thisElement = $(this);

      $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
          var mathCount = Math.ceil(this.count);
          thisElement.text(mathCount);
        },
        complete: settings.complete
      });
    };

    // Function to start counters when user scrolls to target section
    function startCountersOnScroll() {
      var windowScroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      // Check if the target section is in the viewport
      if (windowScroll + windowHeight >= sectionOffset) {
        $('#number1').jQuerySimpleCounter({ end: 1000, duration: 4000 });
        $('#number2').jQuerySimpleCounter({ end: 750, duration: 4000 });
        $('#number3').jQuerySimpleCounter({ end: 8, duration: 4000 });
        $('#number4').jQuerySimpleCounter({ end: 99978, duration: 4000 });
        
        // Remove the scroll event listener once the counters start
        $(window).off('scroll', startCountersOnScroll);
      }
    }

    // Attach scroll event listener to window
    $(window).on('scroll', startCountersOnScroll);
  });
