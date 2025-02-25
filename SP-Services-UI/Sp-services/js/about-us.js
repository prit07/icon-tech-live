$(document).ready(function () {


    // review page stare
    $('.customer-stars-rating').each(function (event) {
        var rating = $(this).attr('rating');
        var i;
        for (i = 0; (i < rating); i++) {
            $(this).find('span.star').eq(i).addClass('filled');
        }
        if (rating % 1 > 0)
            $(this).find('span.star').eq(i - 1).addClass('half-filled');
        $(this).siblings('h6').text(rating);
    });


    $('#owl-our-team').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: [
            '<img src="img/customer-testimonials-left.png" >',
            '<img src="img/customer-testimonials-right.png" >',
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
   

    // faq
    jQuery(".product_faq_accordion_item:first-child")
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