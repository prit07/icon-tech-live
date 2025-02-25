jQuery(document).ready(function() {
	$("#h-toggle-btn, .m-overlay-bg").click(function (e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".h-toggle-btn").toggleClass("open");
		$("#h-sidebar-wrapper").toggleClass("h-menu-active");
		$(".m-overlay-bg").toggleClass('h-bg-active');
		$('body').toggleClass('open-nav');
	});

	   // scroll to id section
    $('.h-main-menu ul>li>a, .ui-ui-banner-pricing-btn').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $("#wrapper").removeClass("toggled");
		$(".h-toggle-btn").removeClass("open");
		$("#h-sidebar-wrapper").removeClass("h-menu-active");
		$(".m-overlay-bg").removeClass('h-bg-active');
		$('body').removeClass('open-nav');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 800);
    });

});