	jQuery(document).ready(function() {
		let e, elems,last_h2;
		elems = document.querySelectorAll('.tsp-demo-wapper h2')
		var sub_ul=0;
		var h2=1;
		var h3=1;

		for (e =0; e < elems.length; e++) {
			if (elems[e].localName === 'h2'){
				if(elems[e].innerHTML != "" && elems[e].innerHTML != "&nbsp;"){
					elems[e].setAttribute('id', 'i_scroll_'+e);
					if(e != elems.length-1){
						jQuery(".sidebar_ul").append("<li class='sub_li sb_e_"+e+"'><a href='#i_scroll_"+e+"' class='sub_a'>"+elems[e].innerHTML.replace(/<[^>]*>/g, "")+"</a></li>");	
					}else{
						jQuery(".sidebar_ul").append("<li class='sub_li sb_e_"+e+"'><a href='#i_scroll_"+e+"' class='sub_a'>"+elems[e].innerHTML.replace(/<[^>]*>/g, "")+"</a></li>");
					}
					last_h2=e;
					h2=h2+1;
				}
			}
		}

		 // Add 'active' class to the first <li> element
		//  jQuery('.sidebar_ul .sub_li:first').addClass('active');

		var scrollLink = jQuery('.tsp-toc-main ul li a');

		scrollLink.click(function (e) {
			e.preventDefault();
			// Remove the 'active' class from all sub_li elements
			jQuery('.sub_li').removeClass('active');

			// Add the 'active' class to the parent of the clicked anchor
			jQuery(this).parent().addClass('active');
			jQuery('html , body').animate({
				scrollTop: jQuery(this.hash).offset().top - 550
			}, 1000);
		});

		// scrollLink.click(function (e) {
		// 	e.preventDefault();
		
		// 	// Remove the 'active' class from all sub_li elements
		// 	jQuery('.sub_li').removeClass('active');
		
		// 	// Add the 'active' class to the parent of the clicked anchor
		// 	jQuery(this).parent().addClass('active');
		
		// 	// Adjust scroll position with an offset
		// 	const target = jQuery(this.hash);
		// 	const offset = 550; // Adjust this value to account for any fixed header or desired padding
		// 	if (target.length) {
		// 		jQuery('html, body').animate(
		// 			{
		// 				scrollTop: target.offset().top - offset,
		// 			},
		// 			1000
		// 		);
		// 	}
		// });
		
		jQuery('.tsp-title').click(function(){
			jQuery('.sidebar_ul').toggleClass('ul-active');
		});
		jQuery('.tsp-toc-main ul li a').click(function(){
			jQuery('.sidebar_ul').removeClass('ul-active');
		})

	});