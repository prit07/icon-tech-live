$(document).ready(function(){
	/* rating js start*/
	$('.lawyer-profile-stars-rating').each(function (event) {
		var rating = $(this).attr('rating');
		var i;
		for(i = 0; (i < rating); i++) {
			$(this).find('span.star').eq(i).addClass('filled');
		}
		if(rating % 1>0)
			$(this).find('span.star').eq(i-1).addClass('half-filled');
	});
	/* rating js end */

	// tab js

	$('.lawyer-tab-a').click(function(){  
		$(".lawyer-tab").removeClass('lawyer-tab-active');
		$(".lawyer-tab[data-id='"+$(this).attr('data-id')+"']").addClass("lawyer-tab-active");
		$(".lawyer-tab-a").removeClass('lawyer-active-a');
		$(this).parent().find(".lawyer-tab-a").addClass('lawyer-active-a');
	});

	// text showmore js
	$('[data-show="more"]').on('click', function(event) {
		event.preventDefault();
		if ( $(this).attr('more-collapse') === 'false' ) {     
			$(this).attr('more-collapse', 'true'); 
			$(this).prev('.more-text').removeClass('hide');
			$(this).text('less');
		}  else {
			$(this).text('more');
			$(this).attr('more-collapse', 'false'); 
			$(this).prev('.more-text').addClass('hide');
		}  
	});   


	/* reviews rating js start*/
	$('.lawyer-reviews-stars-rating').each(function (event) {
		var rating = $(this).attr('rating');
		var i;
		for(i = 0; (i < rating); i++) {
			$(this).find('span.star').eq(i).addClass('filled');
		}
		if(rating % 1>0)
			$(this).find('span.star').eq(i-1).addClass('half-filled');
	});

});