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

	// search js
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.h-home-wapper').addClass('moblie-search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.h-home-wapper').removeClass('moblie-search-active');
		});
	};

	// trading header js

	jQuery('.h-stk-main-wapper').owlCarousel({
		loop: true,
		margin: 20,
		navText: ['<span class="arrow-h-left"><img src="img/arrow-s-left.svg"></span>','<span class="arrow-h-right"><img src="img/arrow-s-right.svg"></span>'],
		autoplay: false,
		dots:false,
		responsive: {
			0: { items: 1.2, nav: false, },
			768: { items: 2.2, nav: false, },
			1024: { items: 4, nav: true, },
			1200: { items: 4, nav: true, }
		}
	});


})