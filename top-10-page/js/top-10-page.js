jQuery(document).ready(function(){
	var scrollLink = jQuery('.top-10-sidebar ul li a');
	scrollLink.click(function(e) {
		e.preventDefault();
		jQuery('body,html').animate({
			scrollTop: jQuery(this.hash).offset().top
		}, 1000 );
	});
	jQuery(window).scroll(function() {
		scrollLink.click(function(e) {
			jQuery('.top-10-sidebar ul li a').removeClass('active');
			jQuery(this).addClass('active');
		})
	});
})

$(document).ready(function () {
	// Add minus icon for collapse element which is open by default
	$(".collapse.show").each(function () {
	  $(this)
		.prev(".gold-ira-faq")
		.find(".fa")
		.addClass("fa-chevron-up")
		.removeClass("fa-chevron-down");
	});
  
	// Toggle plus minus icon on show hide of collapse element
	$(".collapse")
	  .on("show.bs.collapse", function () {
		$(this)
		  .prev(".gold-ira-faq")
		  .find(".fa")
		  .removeClass("fa-chevron-down")
		  .addClass("fa-chevron-up");
	  })
	  .on("hide.bs.collapse", function () {
		$(this)
		  .prev(".gold-ira-faq")
		  .find(".fa")
		  .removeClass("fa-chevron-up")
		  .addClass("fa-chevron-down");
	  });
  });
  