$(document).ready(function () {
	// header active 
	$('.h-header-card-ul li a ').click(function () {
		$('li a').removeClass("active");
		$(this).addClass("active");
	});
	$('.m-sidebar-wrapper-ul li a ').click(function () {
		$('li a').removeClass("active");
		$(this).addClass("active");
	});

	
	$("#m-toggle-btn, .m-overlay-bg").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".m-toggle-btn").toggleClass("open");
		$("#m-sidebar-wrapper").toggleClass("m-menu-active");
		$('.m-overlay-bg').toggleClass('m-bg-active');
		$('body').toggleClass('open-nav');
	});

})

document.getElementsByClassName('sub-menu-card').addEventListener('click', function(event) {
    event.preventDefault();
    var submenu = document.getElementById('submenu-wrapper');
    if (submenu.style.visibility === 'visible') {
        submenu.style.visibility = 'hidden';
        submenu.style.opacity = '0';
    } else {
        submenu.style.visibility = 'visible';
        submenu.style.opacity = '1';
    }
});
