$(document).ready(function(){
	$(".blog-categories-card ul li a").click(function () {
		var value = $(this).attr('data-filter');
		console.log(value);

		if (value == "all") {
			$('.blog-filter').show('1000');
		} else {
			$(".blog-filter").not('.' + value).hide('3000');
			$('.blog-filter').filter('.' + value).show('3000');
		}

		$(".blog-categories-card ul li a").removeClass("blog-active-1");
		$(this).addClass("blog-active-1");
	});
	$(".blog-categories-card #all").addClass("blog-active-1");
})