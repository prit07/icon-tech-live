jQuery(document).ready(function(){

    var sync3 = $("#sync3");
    var sync4 = $("#sync4");
    var slidesPerPage = 2; 
    var syncedSecondary = true;

    sync3.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false, 
        dots: false,
		margin:30,
        loop: true,
        responsiveRefreshRate: 200,
    }).on( syncPosition);

    sync4
        .on('initialized.owl.carousel', function() {
            sync4.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: false,
			margin:40,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 1, 
            responsiveRefreshRate: 100,
        }).on( syncPosition2);

    function syncPosition(el) {

        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync4
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync4.find('.owl-item.active').length - 1;
        var start = sync4.find('.owl-item.active').first().index();
        var end = sync4.find('.owl-item.active').last().index();

        if (current > end) {
            sync4.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync4.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync3.data('owl.carousel').to(number, 100, true);
        }
    }

    sync4.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync3.data('owl.carousel').to(number, 300, true);
    });


	// Quantity js start
	var productButtonPlus  = $(".product-details-sidebar-qty-btn-plus");
	var productButtonMinus = $(".product-details-sidebar-qty-btn-minus");
	var incrementPlus = productButtonPlus.click(function() {
		var $n = $(this).parent(".product-details-sidebar-qty-container").find(".product-details-sidebar-input-qty");
		$n.val(Number($n.val())+1 );
	});
	var incrementMinus = productButtonMinus.click(function() {
		var $n = $(this).parent(".product-details-sidebar-qty-container").find(".product-details-sidebar-input-qty");
		var amount = Number($n.val());
		if (amount > 0) {
			$n.val(amount-1);
		}
	});

	// faq
	jQuery(".product-details-faq-item .product-details-faq-menu").on("click", function () {
		if (jQuery(this).parent().hasClass("active")) {
		  jQuery(this).next().slideUp();
		  jQuery(this).parent().removeClass("active");
		}
		else {
		  jQuery(".product-details-faq-content").slideUp();
		  jQuery(".product-details-faq-item").removeClass("active");
		  jQuery(this).parent().addClass("active");
		  jQuery(this).next().slideDown();
		}
	  });



	//   mobile view slider
	
	var owl = jQuery('.pbd-wapper-m-slider').owlCarousel({
		margin:32,
		nav:false,
		autoplay:false,
		dots:false, 
		loop: true,
		center:true,
		responsive:{
			0:{ 
				items:2.1,
				
			},
		
		}
	});	

})