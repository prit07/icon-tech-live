jQuery(document).ready(function(){

	jQuery('.product-list-bottom-btn, .m-overlay-bg').click(function(){
		jQuery('#product-list-sidebar-wapper').toggleClass('active-sidebar')
		jQuery('.m-overlay-bg').toggleClass('m-bg-active')
		// jQuery('body').toggleClass('open-nav')
	})

jQuery(document).ready(function(){
	jQuery('#ver-close-sidebar').click(function () {
		jQuery('.ver-sidebar-wapper').removeClass('ver-active-sidebar');
		jQuery('.ver-m-overlay-bg').removeClass('ver-m-bg-active');
	  });
})

    // .home-sidebar-wrapper .elementor-element-populated.fixed {
	// 	position: fixed;
	// 	top: 0;
	// }
	//   var jQuerywindow = jQuery(window);  
	//   var jQuerysidebar = jQuery(".product-list-page .product-list-sidebar-wapper"); 
	//   var jQuerysidebarWidth = jQuerysidebar.innerWidth();
	//   var jQuerysidebarHeight = jQuerysidebar.innerHeight();   
	//   var jQueryfooterOffsetTop = jQuery("footer").offset().top; 
	//   var jQuerysidebarOffset = jQuerysidebar.offset();
	  
	//   jQuerywindow.scroll(function() {
	// 	if(jQuerywindow.scrollTop() > jQuerysidebarOffset.top) {
	// 	  jQuerysidebar.addClass("fixed");   
	// 	  jQuerysidebar.css('width', jQuerysidebarWidth);
	//   } else {
	// 	  jQuerysidebar.removeClass("fixed");   
	//   }    
	//   if(jQuerywindow.scrollTop() + jQuerysidebarHeight > jQueryfooterOffsetTop) {
	// 	  jQuerysidebar.css({"top" : "0",});        
	//   } else {
	// 	  jQuerysidebar.css({"top": "0",});  
	//   }
	// })
	
	/* sidebar Quantity js start */
	var buttonPluspl  = $(".product-list-sidebar-qty-btn-plus");
	var buttonMinuspl = $(".product-list-sidebar-qty-btn-minus");
	var incrementPluspl = buttonPluspl.click(function() {
		var $n = $(this).parent(".product-list-sidebar-qty-container").find(".product-list-sidebar-input-qty");
		$n.val(Number($n.val())+1 );
	});
	var incrementMinuspl = buttonMinuspl.click(function() {
		var $n = $(this).parent(".product-list-sidebar-qty-container").find(".product-list-sidebar-input-qty");
		var amount = Number($n.val());
		if (amount > 0) {
			$n.val(amount-1);
		}
	});
	/* sidebar Quantity js end */

	/* sidebar progress bar js start */
	var totalQuestionspl = 14;
	var current_qpl =  jQuery('.product-list-sidebar-p-card').length;
	jQuery('.product-list-sidebar-progress-1').css("width", Math.round(100 * current_qpl / totalQuestionspl) + "%");
	jQuery('#product-list-sidebar-selected-product').html(current_qpl)
	/* sidebar progress bar js end */

	/* sidebar toggle switch js start */
	const toggle_SwitchPl = document.querySelector('.product-list-switch input[type="checkbox"]');
	const current_ThemePl = localStorage.getItem('data-product-list');
	jQuery('#product-list-s-switch-text').html(current_ThemePl)

	if (current_ThemePl) {
		document.documentElement.setAttribute('data-product-list', current_ThemePl);
		if (current_ThemePl === 'Si') {
			toggle_SwitchPl.checked = true;
		}
	}
	function switch_Theme(e) {
		if (e.target.checked) {
			document.documentElement.setAttribute('data-product-list', 'Si');
			localStorage.setItem('data-product-list', 'Si');
			jQuery('#product-list-s-switch-text').html(localStorage.getItem("data-product-list"));
		}
		else {        
			document.documentElement.setAttribute('data-product-list', 'No');
			localStorage.setItem('data-product-list', 'No');
			jQuery('#product-list-s-switch-text').html(localStorage.getItem("data-product-list"));
		}    
	}
	toggle_SwitchPl.addEventListener('change', switch_Theme, false);
	/* sidebar toggle switch js end */

})