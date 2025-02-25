jQuery(document).ready(function () {
    var widget = jQuery(".fieldset-wapper");
    var btnnext = jQuery(".btn-next");
    var current = 1;

    // Set initial progress
    setProgress(current);
    widget.not(':eq(0)').removeClass('fieldset-active'); // Hide all but the first step

    // Function to set progress dynamically
    function setProgress(currstep) {
        var percent = parseFloat(100 / widget.length) * currstep;
        percent = percent.toFixed();
        jQuery(".progress-bg>div").css("width", percent + "%");
        jQuery(".progress-text").text(percent + "%");
    }

    // Function to show error messages
    function showError(input, message) {
        jQuery(input).closest('.form-input-c-main').find('.error-message').text(message).show();
    }

    // Function to hide error messages
    function hideError(input) {
        jQuery(input).closest('.form-input-c-main').find('.error-message').hide();
    }

    // Function to validate current step inputs dynamically
    function validateCurrentStep() {
        var isValid = true;
        var currentFieldset = widget.eq(current - 1); // Get the current fieldset
        currentFieldset.find('.error-message').hide(); // Clear all error messages

        // Validate required inputs inside the current fieldset
        currentFieldset.find('input, select').each(function () {
            var input = jQuery(this);
            var value = input.val().trim();
            var inputId = input.attr('id');
            var errorMessage = '';

            // Validate specific fields by ID
            if (inputId === 'zip_code' && !/^\d{5,6}$/.test(value)) {
                errorMessage = 'Please enter a valid ZIP code.';
            } else if (inputId === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                errorMessage = 'Please enter a valid email address.';
            } else if (inputId === 'phone' && !/^\d{10}$/.test(value)) {
                errorMessage = 'Please enter a valid phone number.';
            } else if (!value) {
                errorMessage = 'This field is required.';
            }

            // Show error if invalid
            if (errorMessage) {
                showError(input, errorMessage);
                isValid = false; // Mark as invalid
            }
        });

        // Update button state
        updateButtonState(isValid);
        return isValid; // Return validation result
    }

    // Function to update button state and log message
    function updateButtonState(isValid) {
        if (isValid) {
            if (btnnext.prop('disabled')) {
                btnnext.prop('disabled', false);
                btnnext.removeClass('btn-disabled'); // Remove the disabled class
                console.log("Button enabled"); // Log enabled only once
            }
        } else {
            if (!btnnext.prop('disabled')) {
                btnnext.prop('disabled', true);
                btnnext.addClass('btn-disabled'); // Add the disabled class
                console.log("Button disabled"); // Log disabled only once
            }
        }
    }

    // Handle the "Next" button click event
    btnnext.click(function () {
        if (validateCurrentStep()) {
            if (current < widget.length) {
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

    // Automatically enable/disable "Next" button based on input changes
    jQuery('input, select').on('input change', function () {
        validateCurrentStep(); // Validate current step on input changes
    });

    // Zip code validation for the "Get my free estimate" button
    jQuery('.how-much-btn').click(function (e) {
        e.preventDefault();
        var secondZipCode = jQuery('#how-much-input').val().trim();
        if (secondZipCode && /^\d{5,6}$/.test(secondZipCode)) {
            jQuery('#zip_code').val(secondZipCode);
            jQuery('html, body').animate({
                scrollTop: jQuery('#zip_code').offset().top - 400
            }, 'slow');
            jQuery('#zip_code').trigger('input'); // Trigger input to validate
            jQuery("#zip_tab .btn-next").click();
        } else {
            showError('#how-much-input', 'Please enter a valid ZIP code.');
        }
    });
});
