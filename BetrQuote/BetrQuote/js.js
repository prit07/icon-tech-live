$(document).ready(function () {
    // Handle the "Get my free estimate" button click event
    $('.how-much-btn').click(function (e) {
        e.preventDefault(); // Prevent default form submission or page reload

        // Get the value of the first ZIP code input
        var secondZipCode = $('#how-much-input').val().trim();

        // Check if the second ZIP code is valid (5 or 6 digits)
        if (secondZipCode && /^\d{5,6}$/.test(secondZipCode)) {
            // Set the value into the first ZIP code input
            $('#zip_code').val(secondZipCode);

            // Scroll smoothly to the first ZIP code input field
            $('html, body').animate({
                scrollTop: $('#zip_code').offset().top - 400 // Adjust offset if needed
            }, 'slow');

            // Trigger the input event to re-validate the form
            jQuery('#zip_code').trigger('input');
           jQuery("#zip_tab .btn-next").click();
        } else {
            showError('#how-much-input', 'Please enter a valid 5 or 6 digit ZIP code.');
        }
    });

    // Function to show error messages
    function showError(input, message) {
        $(input).closest('.how-much-will-main').find('.error-message').text(message).show();
    }

    // Function to hide error messages
    function hideError(input) {
        $(input).closest('.how-much-will-main').find('.error-message').hide();
    }

    // Validation function for the first ZIP code input
    function validateZipCode() {
        var zipCode = $('#how-much-input').val().trim();
        var zipCodePattern = /^\d{5,6}$/; // Allow 5 to 6 digits

        // Check if the ZIP code does not match the pattern
        if (!zipCodePattern.test(zipCode)) {
            showError('#how-much-input', 'Please enter a valid ZIP code digits.');
            return false;
        } else {
            hideError('#how-much-input');
            return true;
        }
    }

    // Listen to input event on the first ZIP code field to trigger validation
    $('#how-much-input').on('input', function () {
        var isValid = validateZipCode();
        $('.how-much-btn').addClass('btn-disabled');
        // Enable or disable the button and manage the class
        $('.how-much-btn').prop('disabled', !isValid).toggleClass('btn-disabled', !isValid);
    });

    // Validation logic for the second ZIP code input
    $('#zip_code').on('input', function () {
        var zipCode = $(this).val().trim();
        var zipCodePattern = /^\d{5,6}$/; // Allow 5 to 6 digits
        var btnnext = $('#getQuotes'); // Your "Get Quotes" button

        // Check if the ZIP code matches the pattern
        if (zipCodePattern.test(zipCode)) {
            btnnext.prop('disabled', false).removeClass('btn-disabled'); // Enable button
        } else {
            btnnext.prop('disabled', true).addClass('btn-disabled'); // Disable button
        }
    });
});