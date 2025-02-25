$(document).ready(function () {

	$('.descripcion-tabs li').click(function () {
		$('.descripcion-tabs li').removeClass('active');
		$('.category-page-main').removeClass('active');
		var tid = $(this).attr('tab');
		$(this).addClass('active');
		$('#' + tid).addClass('active');
	});

})