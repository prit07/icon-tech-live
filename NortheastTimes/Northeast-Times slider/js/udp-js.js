jQuery(document).ready(function () {
    var owl = jQuery('.owl-northeast-time').owlCarousel({
        loop: false, 
        margin: 10,
        nav: true,
        items: 1,
        autoHeight: true,
        dots: false,
        navText: [
            '<span><img decoding="async" src="https://northeasttimes.com/wp-content/plugins/northeast-custom-shortcodes/assets/img/right-slider-arrow.png" alt="Right"></span>',
            '<span><img decoding="async" src="https://northeasttimes.com/wp-content/plugins/northeast-custom-shortcodes/assets/img/left-slider-arrow.png" alt="Left"></span>'
        ],
    });

    owl.on('changed.owl.carousel', function (event) {
        var totalItems = event.item.count;
        var currentIndex = event.item.index; 

        jQuery('.owl-prev').toggle(currentIndex !== 0); 
        jQuery('.owl-next').toggle(currentIndex !== totalItems - 1);
    });

    jQuery('.owl-northeast-time-bottom p').click(function() {
        owl.trigger('next.owl.carousel');
    });

    owl.trigger('changed.owl.carousel');
});
