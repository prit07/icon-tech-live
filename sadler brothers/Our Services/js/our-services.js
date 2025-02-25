$(document).ready(function(){
  
    // Owl Our Services
    $('.owl-our-services').owlCarousel({
        loop:false,
        margin:50,
        nav:false,
        slidBy:1,
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