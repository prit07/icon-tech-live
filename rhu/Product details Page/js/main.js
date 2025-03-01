$(document).ready(function () {

    // mango pickle star js
    $('.pd-mango-pickle-stars-rating').each(function (event) {
        var rating = $(this).attr('rating');
        var i;
        for (i = 0; (i < rating); i++) {
            $(this).find('span.star').eq(i).addClass('filled');
        }
        if (rating % 1 > 0)
            $(this).find('span.star').eq(i - 1).addClass('half-filled');
    });

    jQuery(".mango-pickle_faq_accordion_item:first-child")
        .addClass("active")
        .children(".mango-pickle_faq_content")
        .slideDown()
        .prev(".mango-pickle_faq_menu")
        .find(".mango-pickle_faq_menu_img")
        .addClass("new-class");

    jQuery(".mango-pickle_faq_accordion_item .mango-pickle_faq_menu").on("click", function () {
        if (jQuery(this).parent().hasClass("active")) {
            jQuery(this).next().slideUp();
            jQuery(this).parent().removeClass("active");
            // Remove class from the menu image
            jQuery(this).find(".mango-pickle_faq_menu_img").removeClass("new-class");
        } else {
            jQuery(".mango-pickle_faq_content").slideUp();
            jQuery(".mango-pickle_faq_accordion_item").removeClass("active");
            jQuery(".mango-pickle_faq_menu_img").removeClass("new-class");

            jQuery(this).parent().addClass("active");
            jQuery(this).next().slideDown();
            // Add the new class to the image div
            jQuery(this).find(".mango-pickle_faq_menu_img").addClass("new-class");
        }
    });





    // review page stare
    $('.pd-stars-rating').each(function (event) {
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
    jQuery(".pd_faq_accordion_item:first-child")
        .addClass("active")
        .children(".pd_faq_content")
        .slideDown()
        .prev(".pd_faq_menu")
        .find(".pd_faq_menu_img")
        .addClass("new-class");

    jQuery(".pd_faq_accordion_item .pd_faq_menu").on("click", function () {
        if (jQuery(this).parent().hasClass("active")) {
            jQuery(this).next().slideUp();
            jQuery(this).parent().removeClass("active");
            // Remove class from the menu image
            jQuery(this).find(".pd_faq_menu_img").removeClass("new-class");
        } else {
            jQuery(".pd_faq_content").slideUp();
            jQuery(".pd_faq_accordion_item").removeClass("active");
            jQuery(".pd_faq_menu_img").removeClass("new-class");

            jQuery(this).parent().addClass("active");
            jQuery(this).next().slideDown();
            // Add the new class to the image div
            jQuery(this).find(".pd_faq_menu_img").addClass("new-class");
        }
    });




    // owl slider

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 5; 
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            margin:10,
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {

        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});
