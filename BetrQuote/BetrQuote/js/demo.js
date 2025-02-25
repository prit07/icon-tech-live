

jQuery(document).ready(function () {
    var widget = jQuery(".fieldset-wapper");
    var btnnext = jQuery(".btn-next");

    var current = 1;

    // Object to store values for each step
    var formData = {
        zip_code: '',
        project_type: '',
        street_address: '',
        email: '',
        first_name: '',
        last_name: '',
        phone: ''
    };

    // Function to set progress
    function setProgress(currstep) {
        var percent = parseFloat(100 / widget.length) * currstep;
        percent = percent.toFixed();
        jQuery(".progress-bg>div").css("width", percent + "%");
        jQuery(".progress-text").text(percent + "%");
    }

    // Set initial progress
    setProgress(current);
    widget.not(':eq(0)').removeClass('fieldset-active'); // Hide all but the first step

    // Function to show error messages
    function showError(input, message) {
        jQuery(input).closest('.form-input-c-main').find('.error-message').text(message).show();
    }

    // Function to hide error messages
    function hideError(input) {
        jQuery(input).closest('.form-input-c-main').find('.error-message').hide();
    }

    // Validation function
    function validateCurrentStep() {
        var isValid = true;

        // Clear all error messages
        jQuery('.error-message').hide();

        // Validate ZIP Code on step 1
        if (current === 1) {
            var zipCode = jQuery('#zip_code').val().trim();
            var zipCodePattern = /^\d{5,6}$/;  // Allow 5 to 6 digits
            formData.zip_code = zipCode; // Store value

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
            } else {
                // Store project type value
                formData.project_type = $('input[name="project_type"]:checked').val();
            }
        }

        // Validate Address on step 3
        if (current === 3) {
            var address = $('#street_address').val().trim();
            formData.street_address = address; // Store value
            
            if (!address) {
                showError('#street_address', 'Please enter your street address.');
                isValid = false;
            } 
        }
       
        // Validate Email on step 4
        if (current === 4) {
            var email = jQuery('#email').val().trim();
            formData.email = email; // Store value
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
            if (!email || !emailPattern.test(email)) {
                showError('#email', 'Please enter a valid email address.');
                isValid = false;
            }
        }
          
        // Validate First Name and Last Name on step 5
        if (current === 5) {
            var firstName = jQuery('#first_name').val().trim();
            var lastName = jQuery('#last_name').val().trim();
            formData.first_name = firstName; // Store value
            formData.last_name = lastName; // Store value
            if (!firstName) {
                showError('#first_name', 'Please enter your first name.');
                isValid = false;
            }
            if (!lastName) {
                showError('#last_name', 'Please enter your last name.');
                isValid = false;
            }
        }

        // Validate Phone Number on step 6
        if (current === 6) {
            var phoneNumber = jQuery('#phone').val().trim();
            formData.phone = phoneNumber; // Store value
            var phonePattern = /^\d{10}$/;
            if (!phoneNumber || !phonePattern.test(phoneNumber)) {
                showError('#phone', 'Please enter a valid phone number.');
                isValid = false;
            }
        }

        // Enable or disable the button based on validation
        btnnext.prop('disabled', !isValid);
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
                jQuery('.fieldset-progress-bar').addClass('d-flex');
                jQuery('.btn-main').addClass('btn-disabled');
                widget.eq(current - 1).removeClass('fieldset-active'); // Hide current step
                widget.eq(current).addClass('fieldset-active'); // Show next step
                setProgress(++current); // Update progress bar

                // Populate inputs from formData when going to the next step
                populateInputs();
            }
        }
    });

    // Handle the "Back" button click event
    jQuery('.btn-back').click(function () {
        if (current > 1) {
            widget.eq(current - 1).removeClass('fieldset-active'); // Hide current step
            widget.eq(current - 2).addClass('fieldset-active'); // Show previous step
            setProgress(--current); // Update progress bar;
            $('.fieldset-inner-box-col').removeClass('btn-disabled');
            if (current === 1 || current === 2) {
                validateCurrentStep(); // Revalidate to enable/disable the button
            }
            // Populate inputs from formData when going back to the previous step
            populateInputs();
        }
    });

    // Function to populate inputs with stored values
    function populateInputs() {
        jQuery('#zip_code').val(formData.zip_code);
        jQuery('input[name="project_type"][value="' + formData.project_type + '"]').prop('checked', true);
        jQuery('#street_address').val(formData.street_address);
        jQuery('#email').val(formData.email);
        jQuery('#first_name').val(formData.first_name);
        jQuery('#last_name').val(formData.last_name);
        jQuery('#phone').val(formData.phone);
    }

    // Hide the progress bar on cancel button click
    jQuery('.btn-back-h').click(function () {
        jQuery('.fieldset-progress-bar').removeClass('d-flex').addClass('d-none');
    });

    // Input event listener for validation
    jQuery('.input-mian').on('input', function () {
        validateCurrentStep();
    });
    
    // Funnel start here
    jQuery('.how-much-btn').click(function (e) {
        e.preventDefault(); // Prevent default form submission or page reload

        var secondZipCode = jQuery('#how-much-input').val().trim();

        if (secondZipCode && /^\d{5,6}$/.test(secondZipCode)) {
            jQuery('#zip_code').val(secondZipCode);
            jQuery('html, body').animate({
                scrollTop: jQuery('#zip_code').offset().top - 400 
            }, 'slow');

            jQuery('#zip_code').trigger('input'); // Re-validate ZIP code
            jQuery("#zip_tab .btn-next").click(); // Trigger the next button
        } else {
            showError('#how-much-input', 'Please enter a valid 5 or 6 digit ZIP code.');
        }
    });

    // Function to show error messages
    function showError(input, message) {
        jQuery(input).closest('.how-much-will-main').find('.error-message').text(message).show();
    }

    // Function to hide error messages
    function hideError(input) {
        jQuery(input).closest('.how-much-will-main').find('.error-message').hide();
    }

    // Validation function for the first ZIP code input
    function validateZipCode() {
        var zipCode = jQuery('#how-much-input').val().trim();
        var zipCodePattern = /^\d{5,6}$/; // Allow 5 to 6 digits

        if (!zipCodePattern.test(zipCode)) {
            showError('#how-much-input', 'Please enter a valid ZIP code digits.');
            return false;
        } else {
            hideError('#how-much-input');
            return true;
        }
    }

    jQuery('#how-much-input').on('input', function () {
        var isValid = validateZipCode();
        jQuery('.how-much-btn').prop('disabled', !isValid).toggleClass('btn-disabled', !isValid);
    });

    // Validation logic for the second ZIP code input
    jQuery('#zip_code').on('input', function () {
        var zipCode = jQuery(this).val().trim();
        var zipCodePattern = /^\d{5,6}$/; // Allow 5 to 6 digits
        var btnnext = jQuery('#getQuotes'); // Your "Get Quotes" button

        if (zipCodePattern.test(zipCode)) {
            btnnext.prop('disabled', false).removeClass('btn-disabled'); // Enable button
        } else {
            btnnext.prop('disabled', true).addClass('btn-disabled'); // Disable button
        }
    });

    // Input event listener for validation
    jQuery('.input-mian').on('input', function () {
        validateCurrentStep();
    });
});
