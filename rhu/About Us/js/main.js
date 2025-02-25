$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout: 4000,
        stagePadding: 90,
        center: true,
        responsive: {
            0: { items: 2.2, stagePadding: 30},
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
});