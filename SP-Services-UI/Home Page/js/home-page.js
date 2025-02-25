$(document).ready(function () {
    $('#owl-banner').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: true,
        navText: [
            '<img src="img/slider-arrow-left.png" >',
            '<img src="img/slider-arrow-right.png" >',
        ],
    })


    $('#owl-customer-testimonials').owlCarousel({
        stagePadding: 200,
        loop: true,
        center: true,
        margin: 30,
        nav: false,
        items: 1,
        navText: [
            '<img src="img/customer-testimonials-left.png" >',
            '<img src="img/customer-testimonials-right.png" >',
        ],
        nav: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 20
            },
            600: {
                items: 1,
                stagePadding: 100
            },
            1000: {
                items: 1,
                stagePadding: 200
            },
            1200: {
                items: 1,
                stagePadding: 250
            },
            1400: {
                items: 1,
                stagePadding: 300
            },
            1600: {
                items: 1,
                stagePadding: 350
            },
            1800: {
                items: 1,
                stagePadding: 400
            }
        }
    })

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


    jQuery(".default_option").click(function(){
        $(this).parent().toggleClass("active");
    });
    jQuery(".select_ul li").click(function(){
        var currentele = $(this).html();
        $(".default_option li").html(currentele);
        $(this).parents(".select_wrap").removeClass("active");
    });
})