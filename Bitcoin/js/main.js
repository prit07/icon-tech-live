$(document).ready(function(){
    $('#owl-portfolio').owlCarousel({
        loop:true,
        margin:15 ,
        nav:true,
        navText: [
            '<i class="fa-solid fa-arrow-left-long"></i>',
            '<i class="fa-solid fa-arrow-right-long"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
})


