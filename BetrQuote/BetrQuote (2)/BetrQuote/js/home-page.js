$(document).ready(function () {
    var widget = $(".fieldset-wapper");
    var btnnext = $(".btn-next");
    var current = 1;

    // Function to set progress
    function setProgress(currstep) {
        var percent = parseFloat(100 / widget.length) * currstep;
        percent = percent.toFixed();
        $(".progress-bg>div").css("width", percent + "%");
        $(".progress-text").text(percent + "%");
    }

    // Set initial progress
    setProgress(current);
    widget.not(':eq(0)').removeClass('fieldset-active'); // Hide all but the first step

    // Function to show error messages
    function showError(input, message) {
        $(input).closest('.form-input-c-main').find('.error-message').text(message).show();
    }

    // Function to hide error messages
    function hideError(input) {
        $(input).closest('.form-input-c-main').find('.error-message').hide();
    }

    // Validation function
    function validateCurrentStep() {
        var isValid = true;

        // Clear all error messages
        $('.error-message').hide();

        // Validate ZIP Code on step 1
        if (current === 1) {
            var zipCode = jQuery('#zip_code').val().trim();
            var zipCodePattern = /^\d{5,6}$/;  // Allow 5 to 6 digits
        
            // Check if the ZIP code does not match the pattern
            if (!zipCodePattern.test(zipCode)) {
                showError('#zip_code', 'Please enter a valid digit ZIP code.');
                isValid = false;
            }
        }
        // Validate Project Type on step 2
        if (current === 2) {
            if (!$('input[name="project_type"]:checked').length) {
                showError('.fieldset-inner-box', 'Please select a project type.');
                isValid = false;
            }
        }
        // Validate Address on step 3
        if (current === 3) {
            var address = $('#street_address').val().trim();
            if (!address) {
                showError('#street_address', 'Please enter your street address.');
                isValid = false;
            }
        }

        // Validate Email on step 4
        if (current === 4) {
            var email = jQuery('#email').val().trim();
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
            if (!email || !emailPattern.test(email)) {
                showError('#email', 'Please enter a valid email address.'); // Show error message
                isValid = false;
            }
        }

        // Validate First Name and Last Name on step 5
        if (current === 5) {
            var firstName = jQuery('#first_name').val().trim(); // Use ID instead of placeholder
            var lastName = jQuery('#last_name').val().trim(); // Use ID instead of placeholder
            if (!firstName) {
                showError('#first_name', 'Please enter your first name.'); 
                isValid = false;
            }
            if (!lastName) {
                showError('#last_name', 'Please enter your last name.'); // Show error message
                isValid = false;
            }
        }

        // Validate Phone Number on step 6
        if (current === 6) {
            var phoneNumber = jQuery('#phone').val().trim(); // Use ID instead of placeholder
            var phonePattern = /^\d{10}$/; // 10-digit phone number pattern
            if (!phoneNumber || !phonePattern.test(phoneNumber)) {
                showError('#phone', 'Please enter a valid phone number.'); // Show error message
                isValid = false;
            }
        }

        // Enable or disable the button based on validation
        btnnext.prop('disabled', !isValid);

        // Add or remove the disabled class
        if (!isValid) {
            btnnext.addClass('btn-disabled');
        } else {
            btnnext.removeClass('btn-disabled');
        }

        return isValid;
    }

    // Handle the "Next" button click event
    btnnext.click(function () {
        // Validate current step before moving to the next
        if (validateCurrentStep()) {
            if (current < widget.length) {
                $('.fieldset-progress-bar').addClass('d-flex');
                $('.btn-main').addClass('btn-disabled');
                widget.eq(current - 1).removeClass('fieldset-active'); // Hide current step
                widget.eq(current).addClass('fieldset-active'); // Show next step
                setProgress(++current); // Update progress bar
                $('.error-message').hide();
            }
        }
    });

    // Handle the "Back" button click event
    jQuery('.btn-back').click(function () {
        if (current > 1) {
            widget.eq(current - 1).removeClass('fieldset-active'); // Hide current step
            widget.eq(current - 2).addClass('fieldset-active'); // Show previous step
            setProgress(--current); // Update progress bar
        }
    });

    // Hide the progress bar on cancel button click
    jQuery('.btn-back-h').click(function () {
        $('.fieldset-progress-bar').removeClass('d-flex').addClass('d-none');
    });

    // Input event listener for validation
    $('.main-input').on('input', function () {
        validateCurrentStep();
    });

    // Slider JS initialization
    jQuery("#reviews-slider").owlCarousel({
        autoplay: true,
        margin: 56,
        loop: true,
        responsiveClass: true,
        autoHeight: true,
        stagePadding: 45,
        dots: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        navText: [
            '<svg class="splide__arrowImg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7598 16.8496L12.3854 4.47524L10.2641 6.59656L20.5171 16.8496L10.2641 27.1027L12.3854 29.224L24.7598 16.8496Z" fill="#4E46E4"></path></svg>',
            '<svg class="splide__arrowImg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7598 16.8496L12.3854 4.47524L10.2641 6.59656L20.5171 16.8496L10.2641 27.1027L12.3854 29.224L24.7598 16.8496Z" fill=" #4E46E4"></path></svg>'],
        responsive: {
            0: {
                items: 1,
                margin: 0,
                stagePadding: 0,
            },
            600: {
                items: 2,
                margin: 30,
                stagePadding: 20,
            },
            1024: {
                margin: 40,
                items: 3,
                stagePadding: 30,
            },
            1366: {
                items: 3
            }
        }
    });
});
