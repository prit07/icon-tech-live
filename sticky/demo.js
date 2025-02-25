jQuery(document).ready(function($) {
    var lastScrollY = 0;
    var ticking = false;

    window.addEventListener('scroll', function() {
        lastScrollY = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                var header = document.querySelector('header');

                if (lastScrollY > 1) {
                    header.classList.add('sticky');
                } else {
                    header.classList.remove('sticky');
                }
                ticking = false;
            });

            ticking = true;
        }
    });

});





// jQuery(document).ready(function($) {
//     var lastScrollY = 0;
//     var ticking = false;

//     window.addEventListener('scroll', function() {
//         lastScrollY = window.scrollY;

//         if (!ticking) {
//             window.requestAnimationFrame(function() {
//                 var header = document.querySelector('.header-navigation');

//                 if (lastScrollY > 1) {
//                     header.classList.add('sticky');
//                 } else {
//                     header.classList.remove('sticky');
//                 }
//                 ticking = false;
//             });

//             ticking = true;
//         }
//     });

// });


// jQuery(document).ready(function() {
//     var clearfix = jQuery('#clearfix');
//     var estanteriaCardWrapper = jQuery('#estanteria-card-wapper');
    
//     // Function to add/remove class based on scroll position
//     jQuery(window).scroll(function() {
//         // Calculate the position of the bottom of #clearfix
//         var clearfixBottom = clearfix.offset().top + clearfix.outerHeight();
        
//         // Check if the window scroll position is past the bottom of #clearfix
//         if ($(window).scrollTop() > clearfixBottom) {
//             // Add the sticky class if the bottom of #clearfix is scrolled past
//             estanteriaCardWrapper.addClass('sticky-cls');
//         } else {
//             // Remove the sticky class if not
//             estanteriaCardWrapper.removeClass('sticky-cls');
//         }
//     });
// });


// jQuery(document).ready(function() {
//     var clearfix = jQuery('#clearfix-s');  // Ensure the selector is correct
//     var estanteriaCardWrapper = jQuery('.estanteria-card-wapper');  // Ensure the selector is correct

//     jQuery(window).scroll(function() {
//         var clearfixOffset = clearfix.offset();
//         var clearfixBottom = clearfixOffset.top + clearfix.outerHeight();

//         if (jQuery(window).scrollTop() > clearfixBottom) {

//             estanteriaCardWrapper.addClass('sticky-cls');
//         } else {
//             estanteriaCardWrapper.removeClass('sticky-cls');
//         }
//     });
// });


jQuery(document).ready(function () {
    const estanteriaCardWrapper = jQuery('.estanteria-card-wapper');
    const sliderCentral = jQuery('.slider-central');
    
    jQuery(window).on('scroll', function () {
        // Get the top position of the slider-central element
        const sliderTop = sliderCentral.offset().top;
        const scrollTop = jQuery(window).scrollTop();

        // Check if the page has scrolled past the slider-central position
        if (scrollTop >= sliderTop) {
            estanteriaCardWrapper.addClass('sticky-cls');
        } else {
            estanteriaCardWrapper.removeClass('sticky-cls');
        }
    });
});
