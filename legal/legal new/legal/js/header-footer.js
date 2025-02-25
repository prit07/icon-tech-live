$(document).ready(function(){
	/* menu js start*/
	$("#h-toggle-btn, .m-overlay-bg").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".h-toggle-btn").toggleClass("open");
		$("#h-sidebar-wrapper").toggleClass("h-menu-active");
		$(".m-overlay-bg").toggleClass('h-bg-active');
		$('body').toggleClass('open-nav');
	});
	 /* menu js end*/

	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.h-home-wapper').addClass('moblie-search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.h-home-wapper').removeClass('moblie-search-active');
		});
	}

	// Content page js
	$(".type-of-car-card-title").click(function(){
		$(this).parent(".type-of-car-card-wapper").find(".type-of-car-card-inner").slideToggle();
	});


})