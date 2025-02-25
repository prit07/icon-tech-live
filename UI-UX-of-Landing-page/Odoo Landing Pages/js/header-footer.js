jQuery(document).ready(function () {
	$("#h-toggle-btn, .m-overlay-bg").click(function (e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".h-toggle-btn").toggleClass("open");
		$("#h-sidebar-wrapper").toggleClass("h-menu-active");
		$(".m-overlay-bg").toggleClass('h-bg-active');
		$('body').toggleClass('open-nav');
	});

	// scroll to id section
	$('.h-main-menu ul>li>a, .ui-ui-banner-pricing-btn').on('click', function (event) {
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

jQuery(document).ready(function () {
    jQuery('.sticky-participants-date-bottom-row ul li a').on('click', function (event) {
        event.preventDefault();
        var target = jQuery(this).attr('href');
        jQuery('html, body').animate({
            scrollTop: jQuery(target).offset().top - 120
        }, 800);
    });

	jQuery('.sticky-participants-date-top-btn a').on('click', function (event) {
        event.preventDefault();
        var target = jQuery(this).attr('href');
        jQuery('html, body').animate({
            scrollTop: jQuery(target).offset().top - 120
        }, 800);
    });

});


jQuery(".time-close-btn").click(function(e){
	e.preventDefault();
	jQuery(".form-field ").addClass("active-btn");
});

jQuery('.date-picker-container .form-control.input').on('click', function () {
	jQuery('.form-field').toggleClass('none-time');
	jQuery(".form-field ").removeClass("active-btn");
});
