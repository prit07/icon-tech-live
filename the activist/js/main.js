jQuery(document).ready(function () {


	jQuery('.date-picker-container').on('click', function() {
        jQuery(this).toggleClass('active');
    });


	jQuery('.date-picker-container .form-control.input').on('click', function () {
        jQuery('.date-picker-container').toggleClass('active');
    });
	// participants js Start
	let count = 1;
	const minCount = 1;
	const maxCount = 1000;
	function updateDisplay() {
		$("#numberDisplay").text(count);
		$("#participantCount").text(count);
		$("#minusButton").prop("disabled", count <= minCount);
		$("#plusButton").prop("disabled", count >= maxCount);
	}
	$("#dropdownButton").on("click", function () {
		$("#dropdownContent").toggleClass("active");
		$("#dropdownButton").toggleClass("active-arrow");
	});
	$("#minusButton").on("click", function () {
		if (count > minCount) {
			count--;
			updateDisplay();
		}
	});
	$("#plusButton").on("click", function () {
		if (count < maxCount) {
			count++;
			updateDisplay();
		}
	});
	$(document).on("click", function (event) {
		if (!$(event.target).closest("#dropdownButton, #dropdownContent").length) {
			$("#dropdownContent").removeClass("active");
			$("#dropdownButton").removeClass("active-arrow");
		}
	});
	updateDisplay();
	// participants js End



    // Select button Start
    const firstButton = $(".at-a-pr-guided-rafting-select-time-btn button").first();
    const defaultTime = firstButton.find("span").text();
    firstButton.addClass("selected");
    $(".at-a-pr-guided-rafting-select-detils-itmes .cancel-time").text(defaultTime);
    $(".at-a-pr-guided-rafting-select-time-btn button").click(function () {
        const selectedTime = $(this).find("span").text();
        $(".at-a-pr-guided-rafting-select-detils-itmes .cancel-time").text(selectedTime);
        $(".at-a-pr-guided-rafting-select-time-btn button").removeClass("selected");
        $(this).addClass("selected");
    });
    $(".at-a-pr-guided-rafting-select-detils-itmes .cancel-time").click(function (event) {
        event.stopPropagation();
    });
    // Select button End




	// // sticky
	// var stickyDiv = jQuery(".sticky-participants-date");
	// var participantsDate = jQuery(".at-a-pr-participants-date");
	// var offsetTop = participantsDate.offset().top;
	// jQuery(window).scroll(function () {
	// 	if (jQuery(window).scrollTop() > offsetTop) {
	// 		if (jQuery(window).width() <= 767) {
	// 			stickyDiv.stop().show().animate({ bottom: '0px', top: 'auto' }, 300);
	// 		} else {
	// 			stickyDiv.stop().show().animate({ top: '0px', bottom: 'auto' }, 300);
	// 		}
	// 	} else {
	// 		if (jQuery(window).width() <= 767) {
	// 			stickyDiv.stop().animate({ bottom: '0px' }, 300, function () {
	// 				jQuery(this).hide();
	// 			});
	// 		} else {
	// 			stickyDiv.stop().animate({ top: '0px' }, 300, function () {
	// 				jQuery(this).hide();
	// 			});
	// 		}
	// 	}
	// });

	// Sticky functionality
var stickyDiv = jQuery(".sticky-participants-date");
var participantsDate = jQuery(".at-a-pr-participants-date");
var offsetTop = participantsDate.offset().top;

jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > offsetTop) {
        if (jQuery(window).width() <= 767) {
            stickyDiv.addClass('sticky-mobile').removeClass('sticky-desktop');
        } else {
            stickyDiv.addClass('sticky-desktop').removeClass('sticky-mobile');
        }
    } else {
        if (jQuery(window).width() <= 767) {
            stickyDiv.removeClass('sticky-mobile');
        } else {
            stickyDiv.removeClass('sticky-desktop');
        }
    }
});



	// calender start
	const datePicker = document.getElementById('datePicker');
	function initializeFlatpickr() {
		const showMonths = window.innerWidth <= 800 ? 1 : 2;

		flatpickr(datePicker, {
			disableMobile: true,
			position: "auto",
			showMonths: showMonths,
			altInput: true,
			altFormat: "F j, Y",
			dateFormat: "Y-m-d",
			onOpen: function () {
				$(".date-picker-container").addClass("active");
			},
			onClose: function () {
				$(".date-picker-container").removeClass("active");
			}
		});
	}
	// Initialize Flatpickr
	initializeFlatpickr();

	$(".at-a-pr-participants-date-btn a").click(function (e) {
        e.preventDefault();
		$(".at-a-pr-participants-date-item").toggleClass("active");
        $(".at-a-pr-guided-rafting").stop(true, true).slideToggle();
		$(".wc-bookings-date-picker").hide();
    });

	$(".at-a-pr-guided-rafting-close-btn").click(function(e){
        e.preventDefault();
		$(".at-a-pr-participants-date-item").removeClass("active");
		$(".at-a-pr-guided-rafting").stop(true, true).slideToggle();
	})
})


