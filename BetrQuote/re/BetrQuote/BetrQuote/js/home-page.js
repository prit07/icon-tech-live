jQuery(document).ready(function () {
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
        $(input).closest('.form-input-c-main').find('.error-message').text(message).show(); // Adjusted to find the error message span
    }

    // Function to hide error messages
    function hideError(input) {
        $(input).closest('.form-input-c-main').find('.error-message').hide(); // Adjusted to find the error message span
    }

    // Validation function
    function validateCurrentStep() {
        var isValid = true;

        // Clear all error messages
        $('.error-message').hide();

        // Validate ZIP Code on step 1
        if (current === 1) {
            var zipCode = $('input[placeholder="ZIP Code"]').val().trim();
            var zipCodePattern = /^\d{6}$/; // 6-digit ZIP code pattern
            if (!zipCode || !zipCodePattern.test(zipCode)) {
                showError('input[placeholder="ZIP Code"]', 'Please enter a valid 6-digit ZIP code.'); // Show error message
                isValid = false;
            }
        }

        // Validate Address on step 3
        if (current === 3) {
            var address = $('input[placeholder="type Here e.g. 123 West Main Road"]').val().trim();
            if (!address) {
                showError('input[placeholder="type Here e.g. 123 West Main Road"]', 'Please enter your street address.');
                isValid = false;
            }
        }

        // Validate Email on step 4
        if (current === 4) {
            var email = $('input[placeholder="Email address"]').val().trim();
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
            if (!email || !emailPattern.test(email)) {
                showError('input[placeholder="Email address"]', 'Please enter a valid email address.');
                isValid = false;
            }
        }
          
        // Validate First Name and Last Name on step 5
        if (current === 5) {
            var firstName = $('input[placeholder="Enter first name"]').val().trim();
            var lastName = $('input[placeholder="Enter last name"]').val().trim();
            if (!firstName) {
                showError('input[placeholder="Enter first name"]', 'Please enter your first name.');
                isValid = false;
            }
            if (!lastName) {
                showError('input[placeholder="Enter last name"]', 'Please enter your last name.');
                isValid = false;
            }
        }
     // Validate Phone Number on step 2
     if (current === 6) {
        var phoneNumber = $('input[placeholder="Enter phone number"]').val().trim();
        var phonePattern = /^\d{10}$/; // 10-digit phone number pattern (adjust as needed)
        if (!phoneNumber || !phonePattern.test(phoneNumber)) {
            showError('input[placeholder="Enter phone number"]', 'Please enter a valid 10-digit phone number.');
            isValid = false;
        }
    }
        // Enable or disable the button based on validation
        btnnext.prop('disabled', !isValid);

        return isValid;
    }

    // Handle the "Next" button click event
    btnnext.click(function () {
        // Validate current step before moving to the next
        if (validateCurrentStep()) {
            if (current < widget.length) {
                $('.fieldset-progress-bar').addClass('d-flex');
                widget.eq(current - 1).removeClass('fieldset-active'); // Hide current step
                widget.eq(current).addClass('fieldset-active'); // Show next step
                setProgress(++current); // Update progress bar
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
    $('input').on('input', function () {
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
            '<svg class="splide__arrowImg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7598 16.8496L12.3854 4.47524L10.2641 6.59656L20.5171 16.8496L10.2641 27.1027L12.3854 29.224L24.7598 16.8496Z" fill="#4E46E4"></path></svg>'
        ],
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
