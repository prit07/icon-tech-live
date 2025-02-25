    // $(document).ready(function () { 
    //     var owl = $('.owl-northeast-time').owlCarousel({
    //         loop: false, // Disable looping
    //         margin: 10,
    //         nav: true,
    //         items: 1,
    //         autoHeight: true,
    //         dots: false,
    //         navText: [
    //             '<span><img src="img/right-slider-arrow.png"></span>',
    //             '<span><img src="img/left-slider-arrow.png"></span>'
    //         ],
    //     });
    //     function updateArrows() {
    //         var totalItems = owl.find('.owl-item').length;
    //         var currentIndex = owl.find('.owl-item.active').index();
    //         var nextIndex = (currentIndex + 1) % totalItems;
    //         var preIndex=(currentIndex - 1) % totalItems;
    //             // Get the zone title for the current and next item
    //         var currentIssueZoneTitle = jQuery('.owl-northeast-time .item').eq(currentIndex).find('.owl-northeast-time-bottom p').text();
    //         var nextIssueZoneTitle = jQuery('.owl-northeast-time .item').eq(nextIndex).find('.owl-northeast-time-bottom p').text();

    //         // Update the next arrow with the next zone title
    //         jQuery('.owl-next').html(nextIssueZoneTitle + ' <span><img decoding="async" src="https://northeasttimes.com/wp-content/plugins/northeast-custom-shortcodes/assets/img/left-slider-arrow.png" alt="Left"></span>');

    //         jQuery('.owl-prev').toggle(currentIndex !== 0); 
    //     }
    //     function firsttimeload() {
    //         var totalItems = owl.find('.owl-item').length;
    //         var currentIndex = owl.find('.owl-item.active').index();
    //         var nextIndex = (currentIndex + 1) % totalItems;
    //         var preIndex=(currentIndex - 1) % totalItems;
        
    //         var nextIssueZoneTitle = jQuery('.owl-northeast-time .item').eq(currentIndex).find('.owl-northeast-time-bottom p').text();

        
    //         jQuery('.owl-next').html(nextIssueZoneTitle + ' <span><img decoding="async" src="https://northeasttimes.com/wp-content/plugins/northeast-custom-shortcodes/assets/img/left-slider-arrow.png" alt="Left"></span>');
    //         jQuery('.owl-prev').toggle(currentIndex !== 0); 
    //     }
    
    //     firsttimeload();

    //     // Handle the zone title update when the carousel changes
    //     owl.on('changed.owl.carousel', function (event) {
    //         updateArrows();
    //     });
    // });