$(document).ready(function () {
    $('.owl-tjs-slider').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        autoHeight: false,
        navText: [
            '<span><img src="img/owl-left.svg"></span>',
            '<span><img src="img/owl-right.svg"></span>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:3
            },
            1100:{
                items:4
            }
        }
    })
});
