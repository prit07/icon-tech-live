$(document).ready(function(){
  $('.owl-brands-page').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    navText: [
        '<span><img src="img/left-arrow.svg"</span>',

        '<span><img src="img/right-arrow.svg"</span>'
    ],
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 3,
        },
        991: {
            items: 4
        }
    }
})

})


