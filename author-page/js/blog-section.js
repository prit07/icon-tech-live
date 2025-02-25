jQuery(document).ready(function(){
	var owl = jQuery('.customer-card-slider').owlCarousel({
		margin:15,
		nav:true,
		navText: [
			'<span><img src="img/left-arrow.svg"</span>',
			'<span><img src="img/right-arrow.svg"</span>'
			],
		autoplay:true,
		 rewind:false,
		dots:false, 
		loop: true,
		responsive:{
			0:{ 
				items:1,
				
			},
			768:{ 
				items:2.4, 
			},
			1024:{ 
				items:3.4 
			}
		}
	});	
});