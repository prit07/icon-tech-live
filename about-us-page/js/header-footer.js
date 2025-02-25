jQuery(document).ready(function(){
	/* menu js start*/
	jQuery("#h-toggle-btn, .m-overlay-bg").click(function(e) {
		e.preventDefault();
		jQuery("#wrapper").toggleClass("toggled");
		jQuery(".h-toggle-btn").toggleClass("open");
		jQuery("#h-sidebar-wrapper").toggleClass("h-menu-active");
		jQuery(".m-overlay-bg").toggleClass('h-bg-active');
		jQuery('body').toggleClass('open-nav');
	});
	 /* menu js end*/
})