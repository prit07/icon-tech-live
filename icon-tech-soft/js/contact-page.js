jQuery(document).ready(function () {
	jQuery(".industries-card").slice(0, 8).addClass('active-1');
	jQuery("#load-more-btn-1").on("click", function(e){
		e.preventDefault();
		jQuery(".industries-card:hidden").slice(0, 4).addClass('active-1');
		if(jQuery(".industries-card:hidden").length == 0) {
			jQuery("#load-more-btn-1").text("No Content").addClass("d-none");
		}
	});
	jQuery('.industries-serve-row').each(function(){
		var card_box_1 = jQuery('.industries-card').length; 
		if (card_box_1 == 8) {
			jQuery("#load-more-btn-1").addClass('d-none')
		}
	})
})