jQuery(document).ready(function(){
	// Quantity js start
	var buttonPlus  = $(".qty-btn-plus");
	var buttonMinus = $(".qty-btn-minus");
	var incrementPlus = buttonPlus.click(function() {
		var $n = $(this).parent(".qty-container").find(".input-qty");
		$n.val(Number($n.val())+1 );
	});
	var incrementMinus = buttonMinus.click(function() {
		var $n = $(this).parent(".qty-container").find(".input-qty");
		var amount = Number($n.val());
		if (amount > 0) {
			$n.val(amount-1);
		}
	});

	const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
	const currentTheme = localStorage.getItem('theme');
	var pda_grid_col = jQuery(".pda-grid-col").length;
	console.log('pda_grid_col', pda_grid_col);
	jQuery('#pda-switch-text').html(currentTheme)
	jQuery(".pda-grid-col").slice(0, 14).show().removeClass('disable').addClass('card-active');


	if (currentTheme) {
		document.documentElement.setAttribute('data-theme', currentTheme);
		if (currentTheme === 'Si') {
			toggleSwitch.checked = true;
			jQuery('.pda-add-to-card').addClass('disable');
			jQuery('.pda-progress-wapper').css('display', 'block');
			jQuery(".pda-grid-col").show().addClass('disable');
			jQuery(".pda-grid-col").slice(0, 14).removeClass('disable').addClass('card-active');

			var totalQuestions = 14;
			var currentQuestion = 0;
			var current_q =  jQuery('.card-active').length;
			jQuery('.pda-progress-1').css("width", Math.round(100 * current_q / totalQuestions) + "%");
			jQuery('#pda-selected-product').html(current_q)
			jQuery('.pda-add-to-card').removeClass('disable');
			myFunction();
		}
		if (currentTheme === 'No') {
			jQuery(".pda-grid-col").slice(0, 14).show().removeClass('disable').addClass('card-active');
		}
	}

	function switchTheme(e) {
		if (e.target.checked) {
			document.documentElement.setAttribute('data-theme', 'Si');
			localStorage.setItem('theme', 'Si');

			jQuery('#pda-switch-text').html(localStorage.getItem("theme"));
			jQuery('.pda-add-to-card').addClass('disable');
			jQuery('.pda-progress-wapper').css('display', 'block');
			jQuery(".pda-grid-col").show().addClass('disable').removeClass('card-active');
			jQuery(".pda-grid-col").slice(0, 14).removeClass('disable').addClass('card-active');

			jQuery('.pda-grid-col .input-qty').val('1');

			var totalQuestions = 14;
			var currentQuestion = 0;
			var current_q =  jQuery('.card-active').length;
			jQuery('.pda-progress-1').css("width", Math.round(100 * current_q / totalQuestions) + "%");
			jQuery('#pda-selected-product').html(current_q)
			jQuery('.pda-add-to-card').removeClass('disable');

			myFunction();

		}
		else {        
			document.documentElement.setAttribute('data-theme', 'No');
			localStorage.setItem('theme', 'No');
			jQuery('#pda-switch-text').html(localStorage.getItem("theme"));
			jQuery('.pda-add-to-card').removeClass('disable');
			jQuery('.pda-progress-wapper').css('display', 'none');
			jQuery(".pda-grid-col").hide().slice(0, 14).show().removeClass('disable').addClass('card-active');
		}    
	}


	toggleSwitch.addEventListener('change', switchTheme, false);

	var totalQuestions = 14;
	var currentQuestion = 0;
	var current_q =  jQuery('.card-active').length;
	jQuery('.pda-progress-1').css("width", Math.round(100 * current_q / totalQuestions) + "%");
	jQuery('#pda-selected-product').html(current_q)
	jQuery('.pda-add-to-card').removeClass('disable');
	if (totalQuestions == current_q) {
		jQuery('.pda-add-to-card').removeClass('disable');
	}

	jQuery(document).on('click', '.disable', function(){
		jQuery(this).removeClass('disable').addClass('card-active');
		currentQuestion++;
		var current_q =  jQuery('.card-active').length;
		jQuery('.pda-grid-col .input-qty').val('1');
		jQuery('.pda-progress-1').css("width", Math.round(100 * current_q / totalQuestions) + "%");
		jQuery('#pda-selected-product').html(current_q)
		if (totalQuestions == current_q) {
			jQuery('.pda-add-to-card').removeClass('disable');
		}
	});

	function myFunction () { 
		jQuery(".qty-btn-minus").click(function(e){
			e.stopPropagation();
			var input_value = jQuery(this).parent().find('.input-qty').val();
			if (input_value == 0) {
				jQuery(this).parent().parent().eq(0).addClass('disable').removeClass('card-active');
				var current_q = jQuery('.card-active').length;
				console.log(current_q)
				jQuery('.pda-progress-1').css("width", Math.round(100 * current_q / totalQuestions) + "%");
				jQuery('#pda-selected-product').html(current_q)
				if (totalQuestions > current_q) {
					jQuery('.pda-add-to-card').addClass('disable');
				}
			}
		});
	}

})