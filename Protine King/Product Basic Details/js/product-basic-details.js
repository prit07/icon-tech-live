jQuery(document).ready(function(){


	// owl slidere
	var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 2; 
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false, 
        dots: false,
		margin:30,
        loop: true,
        responsiveRefreshRate: 200,
    }).on( syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
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

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

 


	// Dropdown
	$('.pbd-escoge-dropdown').click(function () {
		$(this).attr('tabindex', 1).focus();
		$(this).toggleClass('active');
		$(this).find('.pbd-dropdown-menu').slideToggle(300);
	});
	$('.dropdown').focusout(function () {
		$(this).removeClass('active');
		$(this).find('.pbd-dropdown-menu').slideUp(300);
	});
	$('.pbd-escoge-dropdown  .pbd-dropdown-menu li').click(function () {
		$(this).parents('.pbd-escoge-dropdown').find('h4').text($(this).text());
		$(this).parents('.pbd-escoge-dropdown').find('input').attr('value', $(this).text());
	});
	


// button switch  pbd-quiero-progress-wapper
	const pbdToggleSwitch = document.querySelector('.pbd-quiero-theme-switch input[type="checkbox"]');
	const pbdCurrentTheme = localStorage.getItem('theme');
	jQuery('#pbd-quiero-switch-text').html(pbdCurrentTheme)

	if (pbdCurrentTheme) {
		document.documentElement.setAttribute('data-theme', pbdCurrentTheme);
		if (pbdCurrentTheme === 'Si') {
			pbdToggleSwitch.checked = true;
			jQuery('.pbd-quiero-progress-wapper').css('display', 'block');
		} else {
			jQuery('.pbd-quiero-progress-wapper').css('display', 'none');
		}
	}
	function switchTheme(e) {
		if (e.target.checked) {
			document.documentElement.setAttribute('data-theme', 'Si');
			localStorage.setItem('theme', 'Si');

			jQuery('#pbd-quiero-switch-text').html(localStorage.getItem("theme"));
			jQuery('.pbd-quiero-progress-wapper').css('display', 'block');
		}
		else {
			document.documentElement.setAttribute('data-theme', 'No');
			localStorage.setItem('theme', 'No');
			jQuery('.pbd-quiero-progress-wapper').css('display', 'none');
			jQuery('#pbd-quiero-switch-text').html(localStorage.getItem("theme"));;
		}
	}
	pbdToggleSwitch.addEventListener('change', switchTheme, false);



// button switch pbd-salsa-progress-wapper
	const pbdSalsaToggleSwitch = document.querySelector('.pbd-salsa-theme-switch input[type="checkbox"]');
    const pbdSalsaCurrentTheme = localStorage.getItem('salsaTheme');

    console.log('pbdSalsaToggleSwitch:', pbdSalsaToggleSwitch); // Check if pbdSalsaToggleSwitch is correctly selected
    console.log('pbdSalsaCurrentTheme:', pbdSalsaCurrentTheme); // Check the current theme value from localStorage

    if (pbdSalsaCurrentTheme) {
        document.documentElement.setAttribute('data-salsa-theme', pbdSalsaCurrentTheme);
        if (pbdSalsaCurrentTheme === 'Si') {
            pbdSalsaToggleSwitch.checked = true;
            jQuery('.pbd-salsa-progress-wapper').css('display', 'block');
        } else {
            jQuery('.pbd-salsa-progress-wapper').css('display', 'none');
        }
        jQuery('#pbd-salsa-switch-text').html(pbdSalsaCurrentTheme);
    }

    function switchSalsaTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-salsa-theme', 'Si');
            localStorage.setItem('salsaTheme', 'Si');
            jQuery('.pbd-salsa-progress-wapper').css('display', 'block');
            jQuery('#pbd-salsa-switch-text').html(localStorage.getItem("salsaTheme"));
        } else {
            document.documentElement.setAttribute('data-salsa-theme', 'No');
            localStorage.setItem('salsaTheme', 'No');
            jQuery('.pbd-salsa-progress-wapper').css('display', 'none');
            jQuery('#pbd-salsa-switch-text').html(localStorage.getItem("salsaTheme"));
        }
    }

    if (pbdSalsaToggleSwitch) { 
        pbdSalsaToggleSwitch.addEventListener('change', switchSalsaTheme, false);
    } else {
        console.log('pbdSalsaToggleSwitch is null or undefined.'); 
    }




	// pbd wapper m slider

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