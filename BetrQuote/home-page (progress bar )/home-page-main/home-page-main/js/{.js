jQuery(document).ready(function () {
	widget = $(".fieldset-wapper");
	btnnext = $(".btn-next");

	function setProgress(currstep) {
		var percent = parseFloat(100 / widget.length) * currstep;
		percent = percent.toFixed();
		$(".progress-bg>div").css("width", percent + "%");
		$(".progress-text").text(percent + "% Complete");
	}

	var current = 1;
	setProgress(current);
	widget.not(':eq(0)').removeClass('fieldset-active');

	btnnext.click(function () {
		$('.fieldset-progress-bar').addClass('d-flex');
		if (current < widget.length) {
			widget.addClass('fieldset-active');
			widget.not(':eq('+(current++)+')').removeClass('fieldset-active');
			setProgress(current);
		}
	});

	jQuery('.btn-back').click(function () {
		var cur = jQuery('.fieldset-wapper').index(jQuery('.fieldset-wapper.fieldset-active'));
		jQuery('.fieldset-wapper').removeClass('fieldset-active');
		jQuery('.fieldset-wapper').eq(cur-1).addClass('fieldset-active');
		setProgress(current-1);
		$('.fieldset-progress-bar').removeClass('d-flex').addClass('d-none');
	});

	jQuery('.btn-back-h').click(function())

	// slider js start

	jQuery("#reviews-slider").owlCarousel({
		autoplay: true,
		margin: 70,
		loop: true,
		responsiveClass: true,
		autoHeight: true,
		stagePadding: 60,
		dots: true,
		autoplayTimeout: 7000,
		smartSpeed: 800,
		nav: true,
		navText: [
			'<svg class="splide__arrowImg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7598 16.8496L12.3854 4.47524L10.2641 6.59656L20.5171 16.8496L10.2641 27.1027L12.3854 29.224L24.7598 16.8496Z" fill="#FA8C16"></path></svg>',
			'<svg class="splide__arrowImg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7598 16.8496L12.3854 4.47524L10.2641 6.59656L20.5171 16.8496L10.2641 27.1027L12.3854 29.224L24.7598 16.8496Z" fill="#FA8C16"></path></svg>'],
		responsive: {
			0: {
				items: 1,
				margin: 0,	stagePadding: 0,
			},

			600: {
				items: 2,
				margin: 30,
				stagePadding: 22,
			},

			1024: {
				margin: 40,
				items: 3,
				stagePadding: 32,
			},

			1366: {
				
				items: 3
			}
		}
	});
})