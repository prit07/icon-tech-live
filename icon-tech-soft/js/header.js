jQuery(document).ready(function() {
	$("#h-toggle-btn, .m-overlay-bg").click(function (e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".h-toggle-btn").toggleClass("open");
		$("#h-sidebar-wrapper").toggleClass("h-menu-active");
		$(".m-overlay-bg").toggleClass('h-bg-active');
		$('body').toggleClass('open-nav');
	});


	// $(".sub-menu-arrow").click(function () {
	// 	$(this).parent("li").find("ul").slideToggle();
	// 	$(this).parent("li").toggleClass("open")
	// });
});