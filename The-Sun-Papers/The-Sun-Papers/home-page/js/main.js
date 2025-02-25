jQuery(document).ready(function(){
	// news slider js
	var owl = jQuery('.news-card-slider').owlCarousel({
		margin:30,
		nav:true,
		navText: [
			'<span><img src="img/slider-arrow.png"></span>',
			'<span><img src="img/slider-arrow.png"></span>'
			],
		autoplay:false,
		dots:false, 
		loop: false,
		items:1,
		responsive: {
			0: { margin:20 }
		}
	});

	// sports slider js
	var owl = jQuery('.sports-card-slider').owlCarousel({
		margin:30,
		nav:true,
		navText: [
			'<span><img src="img/slider-arrow.png"></span>',
			'<span><img src="img/slider-arrow.png"></span>'
			],
		autoplay:false,
		dots:false, 
		loop: false,
		items:1,
		responsive: {
			0: { margin:20 }
		}
	});

	// opinion slider js
	var owl = jQuery('.opinion-card-slider').owlCarousel({
		margin:30,
		nav:true,
		navText: [
			'<span><img src="img/slider-arrow.png"></span>',
			'<span><img src="img/slider-arrow.png"></span>'
			],
		autoplay:false,
		dots:false, 
		loop: false,
		items:1,
		responsive: {
			0: { margin:20 }
		}
	});

	// obituaries slider js
	var owl = jQuery('.obituaries-card-slider').owlCarousel({
		margin:30,
		nav:true,
		navText: [
			'<span><img src="img/slider-arrow.png"></span>',
			'<span><img src="img/slider-arrow.png"></span>'
			],
		autoplay:false,
		dots:false, 
		loop: false,
		items:1,
		responsive: {
			0: { margin:20 }
		}
	});
});