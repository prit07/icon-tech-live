jQuery(document).ready(function () {
    jQuery(".location-card-wapper").click(function () {
        var isActive = $(this).hasClass("active");

        jQuery(".location-card-wapper.active").removeClass("active");
        jQuery(".main-containt.active").removeClass("active");

        if (!isActive) {
            jQuery(this).addClass("active");
            var $nextMainContaint = jQuery(this).next(".main-containt");
            $nextMainContaint.addClass("active");
        }
    });
    

		jQuery(".location-card-wapper").slice(0, 16).show();
		jQuery("body").on('click touchstart', '#seeMore', function (e) {
			e.preventDefault();
			jQuery(".location-card-wapper:hidden").slice(0, 4).slideDown();
			if (jQuery(".location-card-wapper:hidden").length == 0) {
				jQuery("#seeMore").css('visibility', 'hidden');
			}
			// jQuery('html,body').animate({
			// 	scrollTop: $(this).offset().top
			// }, 1000);
		});

});