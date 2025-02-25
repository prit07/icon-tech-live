jQuery(document).ready(function () {
	widget = $(".buy-wapper");
	btnnext = $(".next-btn, .option_card");
	btnsubmit = $("submit-btn");

	function setProgress(currstep) {
		var percent = parseFloat(100 / widget.length) * currstep;
		percent = percent.toFixed();
		$(".progress-bar").css("width", percent + "%").html(percent + "%");
	}

	var current = 1;
	setProgress(current);
	widget.not(':eq(0)').hide();

	btnnext.click(function () {
		if (current < widget.length) {
			widget.show();
			widget.not(':eq(' + (current++) + ')').hide();
			setProgress(current);
		}
	});

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
				margin: 0, stagePadding: 0,
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

	$('.fieldset-inner-box .fieldset-inner-box-col').click(function () {
		$('.fieldset-inner-box-col').removeClass("active");
		$(this).addClass("active");
	});

	const totalFieldsets = $(".fieldset-wapper").length;
	let currentStep = 0; // Track the current step

	function updateProgress() {
		const progressPercentage = (currentStep / (totalFieldsets - 1)) * 100;
		$(".progress-bg > div").css("width", progressPercentage + "%");
		$(".progress-text").text(progressPercentage + "% Complete");
	}

	$(".btn-next").click(function () {
		const activeFieldset = $(".fieldset-active");

		// Only proceed if there is a next fieldset
		if (currentStep < totalFieldsets - 1) {
			activeFieldset.removeClass("fieldset-active");
			currentStep++;
			const nextFieldset = $(".fieldset-wapper").eq(currentStep);
			nextFieldset.addClass("fieldset-active");
			updateProgress();
		}
	});

	$(".btn-back").click(function () {
		const activeFieldset = $(".fieldset-active");

		// Only proceed if there is a previous fieldset
		if (currentStep > 0) {
			activeFieldset.removeClass("fieldset-active");
			currentStep--;
			const prevFieldset = $(".fieldset-wapper").eq(currentStep);
			prevFieldset.addClass("fieldset-active");
			updateProgress();
		}
	});

	// Initialize progress for the first fieldset
	updateProgress();




})





jQuery(document).ready(function () {
	jQuery("#h-menu-slide-h").owlCarousel({
		autoplay: true,
		margin: 18,
		loop: true,
		responsiveClass: true,
		autoHeight: true,
		stagePadding: 0,
		dots: true,
		autoplayTimeout: 8000,
		smartSpeed: 800,
		nav: true,
		items: 9,
	});
});

