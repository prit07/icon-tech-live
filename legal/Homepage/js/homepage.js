$(document).ready(function(){
	/*Legal Guides js*/

	$(".legal-card-wapper .legal-col").slice(0, 4).show();
	$("#legal-guides-btn").on("click", function(e){
		e.preventDefault();
		$(".legal-card-wapper .legal-col:hidden").slice(0, 4).slideDown();
		if($(".legal-card-wapper .legal-col:hidden").length === 0) {
			$("#legal-guides-btn").remove();
		}
	});	

	/*Legal Guides js*/

	$(".legal-research-card-wapper .legal-col").slice(0, 4).show();
	$("#legal-research-btn").on("click", function(e){
		e.preventDefault();
		$(".legal-research-card-wapper .legal-col:hidden").slice(0, 4).slideDown();
		if($(".legal-research-card-wapper .legal-col:hidden").length === 0) {
			$("#legal-research-btn").remove();
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