$(document).ready(function () {
    var mainCarousel = $('#main-carousel');
    var thumbCarousel = $('#thumb-carousel');

    mainCarousel.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        merge: true,
        slidesPerView: "auto",
        cssWidthAndHeight: true,
        slideBy:1,
        visibilityFullFit: true,
        autoResize: false,
        centeredSlides: true,
        margin: 40,
        responsive: {
            0: {
                items: 1
            },
            737: {
                items: 2
            },
            992: {
                items: 3,
                stagePadding: 0,

            }
        }
    });

    thumbCarousel.owlCarousel({
        items: 4,
        autoWidth: true,
        loop: true,
        nav: true,
        slideBy:1,
        dots: false,
        margin: 10,
        navText: [
            '<span class="arrow-h-left"><img src="img/left.png"></span>',
            '<span class="arrow-h-right"><img src="img/right.png"></span>'
        ]
    });

    // Synchronize main carousel with thumbnail carousel
    mainCarousel.on('click', '.owl-next', function () {
        thumbCarousel.trigger('next.owl.carousel');
    });
    mainCarousel.on('click', '.owl-prev', function () {
        thumbCarousel.trigger('prev.owl.carousel');
    });

    thumbCarousel.on('click', '.owl-next', function () {
        mainCarousel.trigger('next.owl.carousel');
    });
    thumbCarousel.on('click', '.owl-prev', function () {
        mainCarousel.trigger('prev.owl.carousel');
    });

    // Add class to the current active item for styling purposes
    mainCarousel.find(".owl-item").eq(3).addClass("item2");
    mainCarousel.find('.owl-item.active').eq(1).addClass('last-two-active');
    mainCarousel.find('.owl-item.active').eq(2).addClass('last-three-active');
    mainCarousel.on('changed.owl.carousel', function (event) {
        mainCarousel.find(".item2").removeClass("item2");
        mainCarousel.find(".owl-item").eq(event.item.index).addClass("item2");

        mainCarousel.find('.last-two-active').removeClass('last-two-active');
        mainCarousel.find('.owl-item.active').eq(2).addClass('last-two-active');

        mainCarousel.find('.last-three-active').removeClass('last-three-active');
        mainCarousel.find('.owl-item.active').next().eq(2).addClass('last-three-active');

        $(".main-carousel-items-first-text").removeClass("main-carousel-bg");
        $(".item2").find(".main-carousel-items-first-text").addClass("main-carousel-bg");
    });

});


