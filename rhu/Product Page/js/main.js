$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        stagePadding: 90,
        center: true,
        responsive: {
            0: { items: 2.2, stagePadding: 30 },
            600: { items: 2, stagePadding: 60 },
            1000: { items: 3, stagePadding: 180 }
        },
        onInitialized: setItemMargins,
        onResized: setItemMargins
    });
    function setItemMargins() {
        let viewportWidth = $(window).width();
        let marginTopValue = viewportWidth < 600 ? "30px" : "60px";

        $(".owl-item").filter(":odd").css("margin-top", marginTopValue);
    }

    // our category page
    $('.product-tabs li').click(function () {
        $('.product-tabs li').removeClass('active');
        $('.product-content').removeClass('active');
        $('.product-img').removeClass('active');
        $('.dot').removeClass('active');

        var tid = $(this).attr('tab');
        $(this).addClass('active');
        $('#' + tid).addClass('active');

        // Show the corresponding image and activate the dot
        var index = $(this).index(); // Get the index of the clicked tab
        $('.col-product-img img').removeClass('active').eq(index).addClass('active');
        $('.col-product-dots .dot').eq(index).addClass('active');
    });


    // faq
    jQuery(".product_faq_accordion_item:first-child")
        .addClass("active")
        .children(".product_faq_content")
        .slideDown()
        .prev(".product_faq_menu")
        .find(".product_faq_menu_img")
        .addClass("new-class");

    jQuery(".product_faq_accordion_item .product_faq_menu").on("click", function () {
        if (jQuery(this).parent().hasClass("active")) {
            jQuery(this).next().slideUp();
            jQuery(this).parent().removeClass("active");
            // Remove class from the menu image
            jQuery(this).find(".product_faq_menu_img").removeClass("new-class");
        } else {
            jQuery(".product_faq_content").slideUp();
            jQuery(".product_faq_accordion_item").removeClass("active");
            jQuery(".product_faq_menu_img").removeClass("new-class");

            jQuery(this).parent().addClass("active");
            jQuery(this).next().slideDown();
            // Add the new class to the image div
            jQuery(this).find(".product_faq_menu_img").addClass("new-class");
        }
    });


});