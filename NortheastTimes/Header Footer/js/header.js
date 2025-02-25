$(document).ready(function () {
    /* menu js start*/
    $("#h-toggle-btn, .m-overlay-bg").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(".h-toggle-btn").toggleClass("open");
        $("#h-sidebar-wrapper").toggleClass("h-menu-active");
        $(".m-overlay-bg").toggleClass('h-bg-active');
        $('body').toggleClass('open-nav');
    });
    /* menu js end*/

    // search js
    if($('.search-btn').length) {
    	$('.search-btn').on('click', function() {
    		$('.h-home-wapper').addClass('moblie-search-active');
    	});
    	$('.close-search, .search-back-drop').on('click', function() {
    		$('.h-home-wapper').removeClass('moblie-search-active');
    	});
    };


    $('.search-btn-h').on('click', function (e) {
        e.preventDefault(); // Prevent the default behavior of the anchor tag
        $('.tdb-drop-down-search-inner').toggleClass('search-block');
    });




})

