$(document).ready(function(){
	 /* menu js end*/
 	$("#m-toggle-btn, .m-overlay-bg").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".m-toggle-btn").toggleClass("open");
		$("#m-sidebar-wrapper").toggleClass("m-menu-active");
		$('.m-overlay-bg').toggleClass('m-bg-active');
		$('body').toggleClass('open-nav');
	});

	$(".m-sub-menu-card").click(function (e) {
		e.preventDefault();
		const submenu = $(this).find(".m-submenu-wapper");
		$(".m-submenu-wapper").not(submenu).removeClass("m-submenu-active");
		submenu.toggleClass("m-submenu-active");
	  });
	  
	// search js
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.h-home-wapper').addClass('moblie-search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.h-home-wapper').removeClass('moblie-search-active');
		});
	};
})


