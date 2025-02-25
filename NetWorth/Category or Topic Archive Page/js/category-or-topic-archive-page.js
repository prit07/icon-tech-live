$(document).ready(function() {
    jQuery('.owl-cota-it-work-topic').owlCarousel({
		dots:false,
		nav: false,
		responsive: {
			0: { items: 1.4, touchDrag: true, mouseDrag: true, margin: 10, loop: true, },
			768: { items: 2, touchDrag: true, mouseDrag: true, margin: 10, loop: true, },
			1024: { items: 4, touchDrag: false, mouseDrag: false, margin: 16, },
			1200: { items: 4, touchDrag: false, mouseDrag: false, margin: 16, loop: false, }
		}
    })

	
})