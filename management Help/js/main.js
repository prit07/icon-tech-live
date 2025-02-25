jQuery(document).ready(function() {

	// star js
    jQuery('.management-help-top-stars-rating').each(function (event) {
        var rating = jQuery(this).attr('rating');
        var i;
        for (i = 0; (i < rating); i++) {
            jQuery(this).find('span.star').eq(i).addClass('filled');
        }
        if (rating % 1 > 0)
            jQuery(this).find('span.star').eq(i - 1).addClass('half-filled');
    });
    
	
})