jQuery(document).ready(function(){
	/* sidebar open js start */
	jQuery('.pda-add-to-card').click()
	/* sidebar open js end */


	/* sidebar Quantity js start */
	var buttonPlus  = $(".pda-sidebar-qty-btn-plus");
	var buttonMinus = $(".pda-sidebar-qty-btn-minus");
	var incrementPlus = buttonPlus.click(function() {
		var $n = $(this).parent(".pda-sidebar-qty-container").find(".pda-sidebar-input-qty");
		$n.val(Number($n.val())+1 );
	});
	var incrementMinus = buttonMinus.click(function() {
		var $n = $(this).parent(".pda-sidebar-qty-container").find(".pda-sidebar-input-qty");
		var amount = Number($n.val());
		if (amount > 0) {
			$n.val(amount-1);
		}
	});
	/* sidebar Quantity js end */

	/* sidebar progress bar js start */
	var totalQuestions = 14;
	var current_q =  jQuery('.pda-sidebar-p-card').length;
	jQuery('.pda-sidebar-progress-1').css("width", Math.round(100 * current_q / totalQuestions) + "%");
	jQuery('#pda-sidebar-selected-product').html(current_q)
	/* sidebar progress bar js end */

	/* sidebar toggle switch js start */
	const toggle_Switch = document.querySelector('.pda-switch input[type="checkbox"]');
	const current_Theme = localStorage.getItem('data-pda');
	jQuery('#pda-s-switch-text').html(current_Theme)

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
			jQuery('#pda-s-switch-text').html(localStorage.getItem("data-pda"));
		}
		else {        
			document.documentElement.setAttribute('data-pda', 'No');
			localStorage.setItem('data-pda', 'No');
			jQuery('#pda-s-switch-text').html(localStorage.getItem("data-pda"));
		}    
	}
	toggle_Switch.addEventListener('change', switch_Theme, false);
	/* sidebar toggle switch js end */

})