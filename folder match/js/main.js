$(document).ready(function () {

    $("#m-toggle-btn, .m-overlay-bg").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".m-toggle-btn").toggleClass("open");
		$("#m-sidebar-wrapper").toggleClass("m-menu-active");
		$('.m-overlay-bg').toggleClass('m-bg-active');
		$('body').toggleClass('open-nav');
	});


    $('.purschase-via-paypal-header ul li a').on('click', function (event) {
		event.preventDefault();
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - 120
		}, 800);
	});

})

