$(document).ready(function(){

	// tab js

	$('.press-tab-a').click(function(){  
		$(".press-tab").removeClass('press-tab-active');
		$(".press-tab[data-id='"+$(this).attr('data-id')+"']").addClass("press-tab-active");
		$(".press-tab-a").removeClass('press-active-a');
		$(this).parent().find(".press-tab-a").addClass('press-active-a');
	});
});