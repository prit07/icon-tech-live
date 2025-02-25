$(document).ready(function(){
	/* rating js start*/
	$('.content-stars-rating').each(function (event) {
		var rating = $(this).attr('rating');
		$(this).parent().parent().find('#content-rating-table').html(rating);
		var i;
		for(i = 0; (i < rating); i++) {
			$(this).find('span.star').eq(i).addClass('filled');
		}
		if(rating % 1>0)
			$(this).find('span.star').eq(i-1).addClass('half-filled');
	});
	/* rating js end */

	/*Legal Guides js*/

	$(".legal-guides .Injury-Law-card-wapper").slice(0, 4).show();
	$("#legal-guides").on("click", function(e){
		e.preventDefault();
		$(".legal-guides .Injury-Law-card-wapper:hidden").slice(0, 4).slideDown();
		if($(".legal-guides .Injury-Law-card-wapper:hidden").length === 0) {
			$("#legal-guides").remove();
		}
	});	

	/*Legal Guides js*/

	$(".legal-research-card .Injury-Law-card-wapper").slice(0, 4).show();
	$("#legal-research-card").on("click", function(e){
		e.preventDefault();
		$(".legal-research-card .Injury-Law-card-wapper:hidden").slice(0, 4).slideDown();
		if($(".legal-research-card .Injury-Law-card-wapper:hidden").length === 0) {
			$("#legal-research-card").remove();
		}
	});	


	// form-wapper js //

	$('.floating-control').on('change', function (e) {
		if($(this).is('select')){
			if($(this).val() === $("option:first", $(this)).val()) {
				$(this).parents('.floating-group').removeClass('focused');
			}
			else{
				$(this).parents('.floating-group').addClass('focused');
			}
		}
	})
	

})