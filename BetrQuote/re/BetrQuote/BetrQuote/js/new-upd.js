jQuery(document).ready(function () {
    jQuery('#submit_form').on('click', function () {
        var button = jQuery(this);
        var buttonText = jQuery('#button_text');
        var loader = jQuery('#loader');

        // Hide the button text and show the loader inside the button
        buttonText.hide();  // Hide the text inside the button
        loader.show();      // Show the loader inside the button

        // Simulate a delay (e.g., form submission or AJAX request)
        setTimeout(function () {
            loader.hide();   // Hide the loader after action completes
            buttonText.show(); // Optionally show the text again after loader
        }, 1500);  // Example timeout of 5 seconds (5000 milliseconds)
    });
    var widget = jQuery(".fieldset-wapper");
    var btnnext = jQuery(".btn-next");
    var current = 1;

    // Function to set progress
    function setProgress(currstep) {
        var percent = parseFloat(100 / widget.length) * currstep;
        percent = percent.toFixed();
        jQuery(".progress-bg>div").css("width", percent + "%");
        jQuery(".progress-text").text(percent + "%");
    }

    jQuery('.btn-back-h').click(function () {
        $('.fieldset-progress-bar').removeClass('d-flex').addClass('d-none');
    })

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
            var zipCodePattern = /^\d{5,6}$/;

            if (!zipCodePattern.test(zipCode)) {
                showError('#zip_code', 'Please enter a valid digit ZIP code.');
                isValid = false;
            }
        }

        if (current === 2) {
            var fieldsetbox1 = jQuery('#fieldset_box1').val();
            if (!fieldsetbox1) {
                showError('#fieldset_box1', 'Please select a gutter material.');
                isValid = false;
            }
        }
        if (current === 3) {
            var fieldsetbox2 = jQuery('#fieldset_box2').val();
            if (!fieldsetbox2) {
                showError('#fieldset_box2', 'Please select a gutter material.');
                isValid = false;
            }
        }
  
        if (current === 4) {
            var fieldsetbox3 = jQuery('#fieldset_box3').val();
            if (!fieldsetbox3) {
                showError('#fieldset_box3', 'Please select a gutter material.');
                isValid = false;
            }
        }
        if (current === 5) {
            var fieldsetbox4 = jQuery('#fieldset_box4').val();
            if (!fieldsetbox4) {
                showError('#fieldset_box4', 'Please select a gutter material.');
                isValid = false;
            }
        }

        if (current === 6) {
            var fieldsetbox5 = jQuery('#fieldset_box5').val();
            if (!fieldsetbox5) {
                showError('#fieldset_box5', 'Please select a gutter material.');
                isValid = false;
            }
        }
        // Validate Address on step 3
        if (current === 7) {
            var address = jQuery('#street_address').val().trim();
            if (!address) {
                showError('#street_address', 'Please enter your street address.');
                isValid = false;
            }
        }

        // Validate Email on step 4
        if (current === 8) {
            var email = jQuery('#email').val().trim();
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailPattern.test(email)) {
                showError('#email', 'Please enter a valid email address.');
                isValid = false;
            }
        }

        // Validate First Name and Last Name on step 5
        if (current === 9) {
            var firstName = jQuery('#first_name').val().trim();
            var lastName = jQuery('#last_name').val().trim();
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
        if (current === 10) {
            var phoneNumber = jQuery('#phone').val().trim();
            var phonePattern = /^\d{10}$/;
            if (!phoneNumber || !phonePattern.test(phoneNumber)) {
                showError('#phone', 'Please enter a valid phone number.');
                isValid = false;
            }
        }

        // Enable or disable the button based on validation
        btnnext.prop('disabled', !isValid);
        btnnext.toggleClass('btn-disabled', !isValid);
        return isValid;
    }

    // Handle the "Next" button click event
    btnnext.click(function () {
        // Validate current step before moving to the next
        if (validateCurrentStep()) {
            if (current < widget.length) {
                jQuery('.fieldset-progress-bar').addClass('d-flex');
                widget.eq(current - 1).removeClass('fieldset-active'); // Hide current step
                widget.eq(current).addClass('fieldset-active'); // Show next step
                setProgress(++current); // Update progress bar
                $('.btn-main').addClass('btn-disabled');
                // Reset the button state for the next step


                if (current === 2) {
                    var fieldsetbox1 = jQuery('#fieldset_box1').val();
                    console.log(2);
                    
                    if (fieldsetbox1) {
                        jQuery(".btn-next").removeClass('btn-disabled');
                    } else {
                        jQuery(".btn-next").addClass('btn-disabled');// Disable button if no address
                    }
                }
                if (current === 3) {
                    var fieldsetbox2 = jQuery('#fieldset_box2').val();
                  
                    if (fieldsetbox2) {
                        jQuery(".btn-next").removeClass('btn-disabled');
                    } else {
                        jQuery(".btn-next").addClass('btn-disabled');// Disable button if no address
                    }
                }
                if (current === 4) {
                    var fieldsetbox3 = jQuery('#fieldset_box3').val();
                    console.log(2);
                    
                    if (fieldsetbox3) {
                        jQuery(".btn-next").removeClass('btn-disabled');
                    } else {
                        jQuery(".btn-next").addClass('btn-disabled');// Disable button if no address
                    }
                }
                if (current === 5) {
                    var fieldsetbox4 = jQuery('#fieldset_box4').val();
                  
                    if (fieldsetbox4) {
                        jQuery(".btn-next").removeClass('btn-disabled');
                    } else {
                        jQuery(".btn-next").addClass('btn-disabled');// Disable button if no address
                    }
                }
                if (current === 6) {
                    var fieldsetbox5 = jQuery('#fieldset_box5').val();
                  
                    if (fieldsetbox5) {
                        jQuery(".btn-next").removeClass('btn-disabled');
                    } else {
                        jQuery(".btn-next").addClass('btn-disabled');// Disable button if no address
                    }
                }
                if (current === 7) {
                    var address = jQuery('#street_address').val()?.trim();
                    console.log("6",gutterMaterial1)
                    if (address) {
                        jQuery(".btn-next").removeClass('btn-disabled'); // Enable button if address is filled
                    } else {
                        jQuery(".btn-next").addClass('btn-disabled'); // Disable button if no address
                    }
                
                }
            }
        }
    });

    // Automatically enable/disable "Next" button based on selection in dropdown
    // jQuery('#gutter_material').change(function () {
    //     if (jQuery(this).val()) {
    //         jQuery(".btn-next").removeClass('btn-disabled').prop('disabled', false); // Enable if valid option selected
    //     } else {
    //         jQuery(".btn-next").addClass('btn-disabled').prop('disabled', true); // Disable if no option selected

    //     }
    // });
    jQuery(' #fieldset_box1 , #fieldset_box2 , #fieldset_box3 , #fieldset_box4 ,#fieldset_box5').change(function () {
        var currentSelectBox = jQuery(this); // Current select box that triggered the change event
        if (currentSelectBox.val()) {
            currentSelectBox.closest('.fieldset-wapper').find('.btn-next').removeClass('btn-disabled').prop('disabled', false); // Enable "Next" button
        } else {
            currentSelectBox.closest('.fieldset-wapper').find('.btn-next').addClass('btn-disabled').prop('disabled', true); // Disable "Next" button
        }
    });
    

    // Handle the "Back" button click event
    jQuery('.btn-back').click(function () {
        if (current > 1) {
            widget.eq(current - 1).removeClass('fieldset-active'); // Hide current step
            widget.eq(current - 2).addClass('fieldset-active'); // Show previous step
            setProgress(--current); // Update progress bar

            jQuery('.fieldset-inner-box-col').removeClass('btn-disabled');
            jQuery(".btn-next").removeClass('btn-disabled');
            // Reset button state when going back


            if (current === 2) {
                var fieldsetbox1 = jQuery('#fieldset_box1').val();
          
                if (fieldsetbox1) {
                    jQuery('.btn-next').removeClass('btn-disabled').prop('disabled', false);
                } else {
                    jQuery(".btn-next").addClass('btn-disabled'); // Disable button if no address
                }
            }
            if (current === 3) {
                var fieldsetbox2 = jQuery('#fieldset_box2').val();
          
                if (fieldsetbox2) {
                    jQuery('.btn-next').removeClass('btn-disabled').prop('disabled', false);
                } else {
                    jQuery(".btn-next").addClass('btn-disabled'); // Disable button if no address
                }
            }
            if (current === 4) {
                var fieldsetbox3 = jQuery('#fieldset_box3').val();
          
                if (fieldsetbox3) {
                    jQuery('.btn-next').removeClass('btn-disabled').prop('disabled', false);
                } else {
                    jQuery(".btn-next").addClass('btn-disabled'); // Disable button if no address
                }
            }
            if (current === 5) {
                var fieldsetbox4 = jQuery('#fieldset_box4').val();
          
                if (fieldsetbox4) {
                    jQuery('.btn-next').removeClass('btn-disabled').prop('disabled', false);
                } else {
                    jQuery(".btn-next").addClass('btn-disabled'); // Disable button if no address
                }
            }
            if (current === 6) {
                var fieldsetbox5 = jQuery('#fieldset_box5').val();
          
                if (fieldsetbox5) {
                    jQuery('.btn-next').removeClass('btn-disabled').prop('disabled', false);
                } else {
                    jQuery(".btn-next").addClass('btn-disabled'); // Disable button if no address
                }
            }

            if (current === 7) {
                var address = jQuery('#street_address').val().trim();
                if (address) {
                    jQuery(".btn-next").removeClass('btn-disabled'); // Enable button if address is filled
                } else {
                    jQuery(".btn-next").addClass('btn-disabled'); // Disable button if no address
                }
            }
        }
    }); 

    // Input event listener for validation
    jQuery('.input-mian').on('input', function () {
        validateCurrentStep();
    });

    // jQuery(document).ready(function () {
    //     // Handle the "Get my free estimate" button click event
    //     jQuery('.how-much-btn').click(function (e) {
    //         e.preventDefault(); // Prevent default form submission or page reload

    //         // Get the value of the first ZIP code input
    //         var secondZipCode = jQuery('#how-much-input').val().trim();

    //         // Check if the second ZIP code is valid (5 or 6 digits)
    //         if (secondZipCode && /^\d{5,6}$/.test(secondZipCode)) {
    //             // Set the value into the first ZIP code input
    //             jQuery('#zip_code').val(secondZipCode);

    //             // Scroll smoothly to the first ZIP code input field
    //             jQuery('html, body').animate({
    //                 scrollTop: jQuery('#zip_code').offset().top - 400 // Adjust offset if needed

    //             }, 'slow');

    //             // Trigger the input event to re-validate the form
    //             jQuery('#zip_code').trigger('input');
    //             jQuery("#zip_tab .btn-next").click();
    //         } else {
    //             showError('#how-much-input', 'Please enter a valid 5 or 6 digit ZIP code.');
    //         }
    //     });

    //     // Function to show error messages
    //     function showError(input, message) {
    //         jQuery(input).closest('.how-much-will-main').find('.error-message').text(message).show();
    //     }

    //     // Function to hide error messages
    //     function hideError(input) {
    //         jQuery(input).closest('.how-much-will-main').find('.error-message').hide();
    //     }

    //     // Validation function for the first ZIP code input
    //     function validateZipCode() {
    //         var zipCode = jQuery('#how-much-input').val().trim();
    //         var zipCodePattern = /^\d{5,6}$/; // Allow 5 to 6 digits

    //         // Check if the ZIP code does not match the pattern
    //         if (!zipCodePattern.test(zipCode)) {
    //             showError('#how-much-input', 'Please enter a valid ZIP code digits.');
    //             return false;
    //         } else {
    //             hideError('#how-much-input');
    //             return true;
    //         }
    //     }

    //     // Listen to input event on the first ZIP code field to trigger validation
    //     jQuery('#how-much-input').on('input', function () {
    //         var isValid = validateZipCode();
    //         jQuery('.how-much-btn').addClass('btn-disabled');
    //         // Enable or disable the button and manage the class
    //         jQuery('.how-much-btn').prop('disabled', !isValid).toggleClass('btn-disabled', !isValid);
    //     });

    //     // Validation logic for the second ZIP code input
    //     jQuery('#zip_code').on('input', function () {
    //         var zipCode = jQuery(this).val().trim();
    //         var zipCodePattern = /^\d{5,6}$/; // Allow 5 to 6 digits
    //         var btnnext = jQuery('#getQuotes'); // Your "Get Quotes" button

    //         // Check if the ZIP code matches the pattern
    //         if (zipCodePattern.test(zipCode)) {
    //             btnnext.prop('disabled', false).removeClass('btn-disabled'); // Enable button
    //         } else {
    //             btnnext.prop('disabled', true).addClass('btn-disabled'); // Disable button
    //         }
    //     });
    // });

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

