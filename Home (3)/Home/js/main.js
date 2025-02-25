jQuery(document).ready(function () {


    $('#h-testimonial-slider').owlCarousel({
        loop: true,
        margin: 31,
        dots: false,
        nav: true,
        navText: ["<i class='far fa-arrow-alt-circle-left'></i>", "<i class='far fa-arrow-alt-circle-right'></i>"],
        items: 5,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    $('#h-partner-slider').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });


});
