jQuery(document).ready(function () {
    // Our Facts section js start
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    // Our Facts section js end


    // Our Clients section js start
    $('#h-clients-slider').owlCarousel({
        loop: true,
        margin: 35,
        dots: true,
        nav: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 20
            },
            992: {
                items: 2,
                margin: 20
            },
            1200: {
                items: 2
            }
        }
    });
    // Our Clients section js end


    // faq section js start
    jQuery(".faq_accordion_item:first-child").addClass("active").children(".faq_content").slideDown();
	jQuery(".faq_accordion_item .faq_menu").on("click", function(){
		if( jQuery(this).parent().hasClass("active") ){
			jQuery(this).next().slideUp();
			jQuery(this).parent().removeClass("active");
		}
		else{
			jQuery(".faq_content").slideUp();
			jQuery(".faq_accordion_item").removeClass("active");
			jQuery(this).parent().addClass("active");
			jQuery(this).next().slideDown();
		}
	});
    // faq section js end

     // load more js
     jQuery(".new-industries .industries-card").slice(0, 8).addClass('active-1');
     jQuery("#load-more-btn").on("click", function(e){
         e.preventDefault();
         jQuery(".new-industries .industries-card:hidden").slice(0, 4).addClass('active-1');
         if(jQuery(".new-industries .industries-card:hidden").length == 0) {
             jQuery("#load-more-btn").text("No Content").addClass("d-none");
         }
     });

     jQuery('.new-industries .industries-serve-row').each(function(){
         var card_box = jQuery('.new-industries .industries-card').length;
         if (card_box == 8) {
             jQuery("#load-more-btn").addClass('d-none')
         }
     });
     
});