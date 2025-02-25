$(document).ready(function(){
	/* menu js start*/
	$("#m-toggle-btn, .m-overlay-bg").click(function(e) {
		e.preventDefault();
		$(".m-toggle-btn").toggleClass("open");
		$(".sidebar-wrapper").toggleClass("m-menu-active");
		$('.m-overlay-bg').toggleClass('m-bg-active');
		$('body').toggleClass('open-nav');
	});

	   // HEADER NOTIFICATION
	$('.header-notification-icon').click(function(e) {
		e.preventDefault();
		$('.b-notifiactino-hover').toggle();
		$('.b-checkout-box-hover').hide();
	});

    // HEADER CART TOGGLE
	$('.cart-icon-card').click(function(e) {
		e.preventDefault();
		$('.b-checkout-box-hover').toggle();
		$('.b-notifiactino-hover').hide();
	});

})