jQuery(document).ready(function(){
    // star js
    $('.vvp-ppc-stars-rating').each(function (event) {
        var rating = $(this).attr('rating');
        var i;
        for (i = 0; (i < rating); i++) {
            $(this).find('span.star').eq(i).addClass('filled');
        }
        if (rating % 1 > 0)
            $(this).find('span.star').eq(i - 1).addClass('half-filled');
        $(this).siblings('h6').text(rating);
    });



    // faq js
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
})