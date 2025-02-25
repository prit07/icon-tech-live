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
	$('.h-main-menu  ul li.main_li a').on('click',function(){
		$(this).parent("li.main_li").find("ul.sub_menu_ul").slideToggle();
	});
	var search_rs_bt = $(".h-header-nav .Search-Button-Sign-Up-wapper .search-btn").clone();
	$(".h-header-nav .responsive-search-btn").html(search_rs_bt);
	  /* menu js end*/


	//   footer js
	var footer_social = $(".footer-logo-wapper .social-icon").clone();
	$(".footer-bottom .footer-bottom-social-icon").html(footer_social);


	// Content page js
	$(".type-of-car-card-title").click(function(){
		$(this).parent(".type-of-car-card-wapper").find(".type-of-car-card-inner").slideToggle();
	});


	
})