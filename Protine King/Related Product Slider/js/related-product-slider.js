jQuery(document).ready(function(){
    var owl = jQuery('.owl-related-product-slider').owlCarousel({
        margin:32,
		nav:false,
		autoplay:false,
		dots:false, 
		loop: false,
        responsive:{
            0:{ 
                items:2,
                center:false,
                stagePadding: 50,
                margin:10,
            },
            450: {
                items:3,
                stagePadding: 100,
            },
            991: {
                items:4,
                stagePadding: 100,
            },
        
            1100: {
                items:4, 
                stagePadding: 190,
            },
        }
    });     

    
});
