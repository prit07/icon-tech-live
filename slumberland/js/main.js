
$(document).ready(function(){


    $("#h-toggle-btn, .m-overlay-bg").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".h-toggle-btn").toggleClass("open");
		$("#h-sidebar-wrapper").toggleClass("h-menu-active");
		$(".m-overlay-bg").toggleClass('h-bg-active');
		$('body').toggleClass('open-nav');
	});


	$('.our-award-stars-rating').each(function (event) {
        var rating = $(this).attr('rating');
        var i;
        for (i = 0; (i < rating); i++) {
            $(this).find('span.star').eq(i).addClass('filled');
        }
        if (rating % 1 > 0)
            $(this).find('span.star').eq(i - 1).addClass('half-filled');
    });
    

	$('.owl-star-reviews').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:1,
		dots:false,
		navText: [
            '<span class="arrow-h-left"><img src="img/left-side.svg"></span>',
            '<span class="arrow-h-right"><img src="img/right-side.svg"></span>'
        ]
	})

});