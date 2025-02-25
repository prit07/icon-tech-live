$(document).ready(function () {
	/* rating js start*/
	$('.top-canada-online-casinos-welcom-rating-item').each(function (event) {
		var rating = $(this).attr('rating');
		$(this).parent().parent().find('#content-rating-table').html(rating);
		var i;
		for (i = 0; (i < rating); i++) {
			$(this).find('span.star').eq(i).addClass('filled');
		}
		if (rating % 1 > 0)
			$(this).find('span.star').eq(i - 1).addClass('half-filled');
	});
	/* rating js end */


	$(".default_option").click(function () {
		$(this).parent().toggleClass("active");
	});
	$(".select_ul li").click(function () {
		var currentele = $(this).html();
		$(".default_option li").html(currentele);
		$(this).parents(".select_wrap").removeClass("active");
	});


	$(".default_option_articles-press").click(function () {
		$(this).parent().toggleClass("active");
	});
	$(".select_ul_articles-press li").click(function () {
		var currentele = $(this).html();
		$(".default_option_articles-press li").html(currentele);
		$(this).parents(".select_wrap_articles-press").removeClass("active");
	});

	// faq
	// jQuery(".faq-accordion-item:first-child").addClass("active").children(".faq-content").slideDown();
	// jQuery(".faq_accordion_item_bonuses .faq_menu_bonuses").on("click", function () {
	// 	if (jQuery(this).parent().hasClass("active")) {
	// 		jQuery(this).next().slideUp();
	// 		jQuery(this).parent().removeClass("active");
	// 	}
	// 	else {
	// 		jQuery(".faq_content_bonuses").slideUp();
	// 		jQuery(".faq_accordion_item_bonuses").removeClass("active");
	// 		jQuery(this).parent().addClass("active");
	// 		jQuery(this).next().slideDown();
	// 	}
	// });

	// jQuery(".faq_accordion_item .faq_menu").on("click", function () {
	// 	if (jQuery(this).parent().hasClass("active")) {
	// 		jQuery(this).next().slideUp();
	// 		jQuery(this).parent().removeClass("active");
	// 	}
	// 	else {
	// 		jQuery(".faq_content").slideUp();
	// 		jQuery(".faq_accordion_item").removeClass("active");
	// 		jQuery(this).parent().addClass("active");
	// 		jQuery(this).next().slideDown();
	// 	}
	// });

	jQuery(".faq_accordion_item_bonuses .faq_menu_bonuses").on("click", function () {
		if (jQuery(this).parent().hasClass("active")) {
			jQuery(this).next().slideUp();
			jQuery(this).parent().removeClass("active");
		}
		else {
			jQuery(".faq_content_bonuses").slideUp();
			jQuery(".faq_accordion_item_bonuses").removeClass("active");
			jQuery(this).parent().addClass("active");
			jQuery(this).next().slideDown();
		}
	  }); 

	// jQuery(".faq_accordion_item .faq_menu").on("click", function () {
	// 	if (jQuery(this).parent().hasClass("active")) {
	// 	  jQuery(this).next().slideUp();
	// 	  jQuery(this).parent().removeClass("active");
	// 	}
	// 	else {
	// 	  jQuery(".faq_content").slideUp();
	// 	  jQuery(".faq_accordion_item").removeClass("active");
	// 	  jQuery(this).parent().addClass("active");
	// 	  jQuery(this).next().slideDown();
	// 	}
	//   });


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
   
 
});
