jQuery(document).ready(function(){
	/* sidebar open js start */
	jQuery('.protein-king-icon-cart').click(function(){
		jQuery('.cart-sidebar-wapper').toggleClass('cart-active-sidebar')

	})
	jQuery('#cart-close-sidebar').click(function () {
		jQuery('.cart-sidebar-wapper').removeClass('cart-active-sidebar');
	  });
	

	/* sidebar open js end */



	/* sidebar Quantity js start */
	var buttonPlus  = $(".cart-sidebar-qty-btn-plus");
	var buttonMinus = $(".cart-sidebar-qty-btn-minus");
	var incrementPlus = buttonPlus.click(function() {
		var $n = $(this).parent(".cart-sidebar-qty-container").find(".cart-sidebar-input-qty");
		$n.val(Number($n.val())+1 );
	});
	var incrementMinus = buttonMinus.click(function() {
		var $n = $(this).parent(".cart-sidebar-qty-container").find(".cart-sidebar-input-qty");
		var amount = Number($n.val());
		if (amount > 0) {
			$n.val(amount-1);
		}
	});
	/* sidebar Quantity js end */

	/* sidebar progress bar js start */
	var totalQuestions = 14;
	var current_q =  jQuery('.cart-sidebar-p-card').length;
	jQuery('.cart-sidebar-progress-1').css("width", Math.round(100 * current_q / totalQuestions) + "%");
	jQuery('#cart-sidebar-selected-product').html(current_q)
	/* sidebar progress bar js end */

	/* sidebar toggle switch js start */
	const toggle_Switch = document.querySelector('.cart-switch input[type="checkbox"]');
	const current_Theme = localStorage.getItem('data-pda');
	jQuery('#cart-s-switch-text').html(current_Theme)

	if (current_Theme) {
		document.documentElement.setAttribute('data-pda', current_Theme);
		if (current_Theme === 'Si') {
			toggle_Switch.checked = true;
		}
	}
	function switch_Theme(e) {
		if (e.target.checked) {
			document.documentElement.setAttribute('data-pda', 'Si');
			localStorage.setItem('data-pda', 'Si');
			jQuery('#cart-s-switch-text').html(localStorage.getItem("data-pda"));
		}
		else {        
			document.documentElement.setAttribute('data-pda', 'No');
			localStorage.setItem('data-pda', 'No');
			jQuery('#cart-s-switch-text').html(localStorage.getItem("data-pda"));
		}    
	}
	toggle_Switch.addEventListener('change', switch_Theme, false);
	/* sidebar toggle switch js end */

})


// jQuery('.pda-add-to-card').click(function(){
// 	$('#close-sidebar-main').click(function (e) {
// 		jQuery('#pda-sidebar-wapper').removeClass('active-sidebar');
// 		jQuery('.m-overlay-bg').removeClass('m-bg-active');
// 		jQuery('body').toggleClass('open-nav');
// 	 });
// })