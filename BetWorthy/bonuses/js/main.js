$(document).ready(function () {
	/* rating js start*/
	$('.content-stars-rating').each(function (event) {
		var rating = $(this).attr('rating');
		$(this).parent().parent().find('#content-rating-table').html(rating);
		var i;
		for(i = 0; (i < rating); i++) {
			$(this).find('span.star').eq(i).addClass('filled');
		}
		if(rating % 1>0)
			$(this).find('span.star').eq(i-1).addClass('half-filled');
	});
	/* rating js end */




	// var scrollLink = jQuery('.sidebar-text li a');
	// scrollLink.click(function(e) {
	// 	e.preventDefault();
	// 	jQuery('body,html').animate({
	// 		scrollTop: jQuery(this.hash).offset().top
	// 	}, 1000 );
	// });
	// jQuery(window).scroll(function() {
	// 	var scrollbarLocation = jQuery(this).scrollTop();
	// 	scrollLink.each(function() {
	// 		var sectionOffset = jQuery(this.hash).offset().top - 80;
	// 		if ( sectionOffset <= scrollbarLocation ) {
	// 			jQuery(this).parent().addClass('active');
	// 			jQuery(this).parent().siblings().removeClass('active');
	// 		}
	// 	});
	// });





	// faq
	// jQuery(".faq-accordion-item:first-child").addClass("active").children(".faq-content").slideDown();
	jQuery(".faq_accordion_item .faq_menu").on("click", function () {
		if (jQuery(this).parent().hasClass("active")) {
			jQuery(this).next().slideUp();
			jQuery(this).parent().removeClass("active");
		}
		else {
			jQuery(".faq_content").slideUp();
			jQuery(".faq_accordion_item").removeClass("active");
			jQuery(this).parent().addClass("active");
			jQuery(this).next().slideDown();
		}
	});





	jQuery(document).ready(function () {
		let e, elems, last_h2;
		elems = document.querySelectorAll('.drk-right h2')
		var sub_ul = 0;
		var h2 = 0;

		for (e = 0; e < elems.length; e++) {
			if (elems[e].localName === 'h2') {
				if (elems[e].innerHTML != "" && elems[e].innerHTML != "&nbsp;") {
					elems[e].setAttribute('id', 'i-scroll-' + e);
					if (e != elems.length - 1) {
						jQuery(".sidebar-ul").append("<li class='sub-li sb-e-" + e + "'><a href='#i-scroll-" + e + "' class='sub-a'>" + elems[e].innerHTML.replace(/<[^>]*>/g, "") + "</a></li>");
					} else {
						jQuery(".sidebar-ul").append("<li class='sub-li sb-e-" + e + "'><a href='#i-scroll-" + e + "' class='sub-a'>" + elems[e].innerHTML.replace(/<[^>]*>/g, "") + "</a></li>");
					}
					last_h2 = e;
					h2 = h2 + 1;
				}
			} else if (elems[e].localName === 'h3') {
				if (elems[e].innerHTML != "" && elems[e].innerHTML != "&nbsp;") {
					elems[e].setAttribute('id', 'i-scroll-' + e);
				}
			}
		}

		var scrollLink = jQuery('.sidebar-text li a');
		scrollLink.click(function (e) {
			e.preventDefault();
			jQuery('body,html').animate({
				scrollTop: jQuery(this.hash).offset().top
			}, 1000);
		});
		jQuery(window).scroll(function () {
			var scrollbarLocation = jQuery(this).scrollTop();
			scrollLink.each(function () {
				var sectionOffset = jQuery(this.hash).offset().top - 80;
				if (sectionOffset <= scrollbarLocation) {
					jQuery(this).parent().addClass('active');
					jQuery(this).parent().siblings().removeClass('active');
				}
			});
		});
	})





});
