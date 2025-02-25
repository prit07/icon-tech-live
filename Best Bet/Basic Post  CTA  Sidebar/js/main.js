$(document).ready(function () {
	
	$('.basic-post-find-best-title').click(function(){
		$(this).toggleClass('active'); 
		$(this).next('.basic-post-find-best-content').slideToggle(); 
	});
});
