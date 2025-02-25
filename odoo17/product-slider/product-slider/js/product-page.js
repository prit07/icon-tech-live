$(document).ready(function () {
    var sync1 = $("#pdp_main-slider");
    var sync2 = $("#pdp_slider-thumb");
    // var slidesPerPage = 2;
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        rtl:true,
        autoplay: false,
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);

    sync2.on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
    });

    sync2.owlCarousel({
        items: 155,
        dots: false,
        rtl:true,
        nav: false,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 1,
        responsiveRefreshRate: 100
    }).on('changed.owl.carousel', syncPosition2);
  
    // scroll 
    // sync2.on("wheel", ".owl-stage", function (e) {
    //     e.stopPropagation()
    //     e.preventDefault();
    //     $('.pdp_slider-thumb-left')
    //     console.log(e.originalEvent);
    //     if (e.originalEvent.wheelDelta > 0) {
    //         sync1.trigger("next.owl");

    //     } else {
    //         sync1.trigger("prev.owl");
    //     }

    //     const activeElement = document.querySelector(".pdp_slider-thumb-left .current");
    //     if (activeElement) {
    //       activeElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
    //     }
    // });
    
    let isScrolling = false;
    const scrollDelay = 200;

    sync2.on("wheel", ".owl-stage", function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (!isScrolling) {
            isScrolling = true;

            if (e.originalEvent.wheelDelta > 0) {
                sync1.trigger("next.owl");
            } else {
                sync1.trigger("prev.owl");
            }

            const activeElement = document.querySelector(".pdp_slider-thumb-left .current");
            if (activeElement) {
                activeElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }

            setTimeout(() => {
                isScrolling = false;
            }, scrollDelay);
        }
    });

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
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

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

    // Uncomment if hover functionality is needed
    // sync2.on("mouseover", ".owl-item", function(e){
    //     e.preventDefault();
    //     var number = $(this).index();
    //     sync1.data('owl.carousel').to(number, 300, true);
    // });

});

document.addEventListener("DOMContentLoaded", function () {
    var demoTriggers1 = document.querySelectorAll('.variants-color-trigger1');
    var paneContainer1 = document.querySelector('.detail-zoom-effect1');
  
    demoTriggers1.forEach(function (demoTrigger) {
        new Drift(demoTrigger, {
            paneContainer: paneContainer1,
            zoomFactor: 1,
            inlinePane: false,
            hoverBoundingBox: true,
        });
    });
  });
  

 