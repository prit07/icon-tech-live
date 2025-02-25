$(document).ready(function () {
	jQuery(".articles-press-portfoliobtn ul li:first-child a").addClass("active-1");
	
	jQuery(".articles-press-portfoliobtn ul li a").click(function () {
		var value = jQuery(this).attr('data-filter');
		console.log(value);

		if (value == "all") {
			jQuery('.filter').show('1000');
		} else {
			jQuery(".filter").not('.' + value).hide('1000');
			jQuery('.filter').filter('.' + value).show('1000');
		}

		// Remove the class from all and add it to the clicked element
		jQuery(".articles-press-portfoliobtn ul li a").removeClass("active-1");
		jQuery(this).addClass("active-1");
	});


	$(document).ready(function() {
		$('.text-content').each(function() {
			var $text = $(this);
			var maxHeight = parseInt($text.css('max-height').replace('px', ''));
	
			// Check if text overflows its container
			if ($text[0].scrollHeight > maxHeight) {
				$text.css('cursor', 'pointer'); // Set cursor to pointer when clickable
			} else {
				$text.css('cursor', 'default'); // Set cursor to default if not truncated
			}
		});
	
		// Expand/collapse text on click
		$('.text-content').click(function(e) {
			var $text = $(this);
			if ($text.hasClass('expanded')) {
				$text.removeClass('expanded');
			} else {
				$text.addClass('expanded');
			}
		});
	});
	
	
	
});
