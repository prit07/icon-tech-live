$(document).ready(function () {

	// tab js
    $('.frequently-tab-a').click(function(){  
		$(".frequently-tab").removeClass('frequently-tab-active');
		$(".frequently-tab[data-id='"+$(this).attr('data-id')+"']").addClass("frequently-tab-active");
		$(".frequently-tab-a").removeClass('frequently-active-a');
		$(this).parent().find(".frequently-tab-a").addClass('frequently-active-a');
	});

    
    // faq
    jQuery(".faq_accordion_item:first-child")
        .addClass("active")
        .children(".product_faq_content")
        .slideDown()
        .prev(".product_faq_menu")
        .find(".product_faq_menu_img")
        .addClass("new-class");

    jQuery(".faq_accordion_item .faq_menu").on("click", function () {
        if (jQuery(this).parent().hasClass("active")) {
            jQuery(this).next().slideUp();
            jQuery(this).parent().removeClass("active");
            // Remove class from the menu image
            jQuery(this).find(".faq_menu_img").removeClass("new-class");
        } else {
            jQuery(".faq_content").slideUp();
            jQuery(".faq_accordion_item").removeClass("active");
            jQuery(".faq_menu_img").removeClass("new-class");

            jQuery(this).parent().addClass("active");
            jQuery(this).next().slideDown();
            // Add the new class to the image div
            jQuery(this).find(".faq_menu_img").addClass("new-class");
        }
    });

 

})