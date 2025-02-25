jQuery(document).ready(function(){
    // Portfolio slider section js start
    jQuery(function () {
        var itemClass = jQuery('#owl-item-carousel');
        itemClass.on('initialized.owl.carousel', function (e) {
            var idx = e.item.index;
            itemClass.find('.owl-item').removeClass('middle left right left-last right-last');
            itemClass.find('.owl-item').eq(idx).addClass('middle');
            itemClass.find('.owl-item').eq(idx - 1).addClass('left');
            itemClass.find('.owl-item').eq(idx + 1).addClass('right');
            itemClass.find('.owl-item').eq(idx - 2).addClass('left-last');
            itemClass.find('.owl-item').eq(idx + 2).addClass('right-last');
        });
        itemClass.owlCarousel({
            center: true,
            items: 5,
            nav: true,
            loop: true, 
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            pagination: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
        itemClass.on('translate.owl.carousel', function (e) {
            var idx = e.item.index;
            itemClass.find('.owl-item').removeClass('middle left right left-last right-last');
            itemClass.find('.owl-item').eq(idx).addClass('middle');
            itemClass.find('.owl-item').eq(idx - 1).addClass('left');
            itemClass.find('.owl-item').eq(idx + 1).addClass('right');
            itemClass.find('.owl-item').eq(idx - 2).addClass('left-last');
            itemClass.find('.owl-item').eq(idx + 2).addClass('right-last');
        });
        // Adding accessible labels to navigation buttons and pagination dots speed optmz
        itemClass.find('.owl-prev').removeAttr('role').attr('aria-label', 'Previous'); 
        itemClass.find('.owl-next').removeAttr('role').attr('aria-label', 'Next');
        itemClass.find('.owl-dot').each(function (index) {
            var dotIndex = index + 1;
            jQuery(this).attr('aria-label', 'Go to slide ' + dotIndex);
        });
    });
    // Portfolio slider section js end

    // Clients section js start
    $('#h-clients-slider').owlCarousel({
        loop: true,
        margin: 35,
        dots: true,
        nav: false,
        center: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2, margin: 20 },
            992: { items: 2, margin: 20 },
            1200: { items: 2 }
        }
    });
    // Clients section js end

    // Faq section js start
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
    // Faq section js end

    // Load more js
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
        if (card_box <= 8) {
            jQuery("#load-more-btn").addClass('d-none')
            jQuery("#load-more-btn").parent().addClass('d-none');
        }
    })

    // Our Facts section js start
    jQuery('.count').countUp();
    // Our Facts section js end

    // Popup js start
    $('.modal-popup-open').on('click', function(){
        // $('body').addClass('modal-open');
        $('.email-popup-modal').modal('show');
    });
    $('.email-popup-modal .close').on('click', function(){
        $('body').removeClass('modal-open');
        $('.email-popup-modal').modal('hide');
    });

});