jQuery(document).ready(function(){
	jQuery(".blog-slide-active").slice(0, 9).show();
	jQuery("#load-more-btn").on("click", function(e){
		e.preventDefault();
		jQuery(".blog-slide-active:hidden").slice(0, 3).slideDown();
		if(jQuery(".blog-slide-active:hidden").length == 0) {
			jQuery("#load-more-btn").text("No Content").addClass("d-none");
		}
	});
})