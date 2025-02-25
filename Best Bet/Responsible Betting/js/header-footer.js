$(document).ready(function(){
	/* menu js start*/
	$("#m-toggle-btn, .m-overlay-bg").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".m-toggle-btn").toggleClass("open");
		$("#m-sidebar-wrapper").toggleClass("m-menu-active");
		$('.m-overlay-bg').toggleClass('m-bg-active');
		$('body').toggleClass('open-nav');
	});

	/* search js start */
	jQuery('.header-search-icon').click(function() {
		jQuery('.dd32-search-form').animate({right: 0}, 50);
		jQuery('.dd32-search-popup').show();
		jQuery('.dd32-search-bg').click(function() {
			jQuery('.dd32-search-popup').hide();
			jQuery('.dd32-search-form').animate({right: '-100%'}, 50);
		});
	});
    /* search js end */
})