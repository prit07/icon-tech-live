(function ($) {
	$(document).ready(function () {

		jQuery(window).scroll(function() {
			scroll_show_data();
		})
		

		function scroll_show_data() {
			// console.log('scroll_show_data   ')
			/* mobile view js code start */
			if (window.matchMedia("(max-width: 767px)").matches) {
				$('.ihotspot-wapper').each(function (p, t) {
					$('.ihotspot_hastooltop').each(function (b, bt) {
						$(bt).data('powertip', function () {
							var htmlThis = $(bt).parents('.ihotspot_tooltop_html').attr('data-html');
							// console.log(htmlThis)
							return htmlThis;
						});
						var thisPlace = $(bt).parents('.ihotspot_tooltop_html').data('placement');
						$(bt).powerTip({ manual: true })
						$(bt).on({
							click: function (event) {
								$.powerTip.show(bt, event);
								let offset = bt.closest(".ihotspot-wapper").getBoundingClientRect();
								const tool = document.getElementById("powerTip")
								let position = window.scrollY
								setTimeout(() => {
									let tooloffset = tool.getBoundingClientRect();
									tool.style.top = position + offset.top + (offset.height * 0.5 - tooloffset.height * 0.5) - 4 + "px"
									tool.style.bottom = "auto"
									tool.style.left = offset.left + (offset.width * 0.5 - tooloffset.width * 0.5) + "px"
								}, 120)
							},
							/*mouseleave: function() {
								$.powerTip.hide(bt);
							}*/
						});
					})
				})
			}
			/* mobile view js code end */

			/* desktop view js code start */
			else {
				$('.ihotspot_hastooltop').each(function () {
					$(this).data('powertip', function () {
						var htmlThis = $(this).parents('.ihotspot_tooltop_html').attr('data-html');
						return htmlThis;
					});
					var thisPlace = $(this).parents('.ihotspot_tooltop_html').data('placement');
					$(this).powerTip({
						placement: 'nw-alt',
						smartPlacement: true,
						mouseOnToPopup: true,
					}).on({
						powerTipClose: function () {
							$('#powerTip').html('');
						}
					});
				});
				$('body').on('click', '.close_ihp', function () {
					$.powerTip.hide();
				});
			}
			/* desktop view js code end */
		}

	})

})(jQuery)