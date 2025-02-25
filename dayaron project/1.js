
jQuery(document).ready(function ($) {
    // Reemplaza los radio buttons con los que el plugin espera
    $('.wc-pao-addon-radio-wrapper input[type="radio"]').on('click', function () {
        // Encuentra el radio button seleccionado
        var $selectedRadio = $(this);
        var value = $selectedRadio.val();
        var $wrapper = $selectedRadio.closest('.wc-pao-addon-wrap');
        var label = $.parseHTML($wrapper.find('.wc-pao-addon-image-swatch[data-value="' + value + '"]').data('price'));
        var $selected = $wrapper.find('.wc-pao-addon-image-swatch-selected-swatch');

        // Clear selected swatch.
        $selected.html('');

        // Marca el radio button seleccionado en el campo oculto
        $wrapper.find('.wc-pao-addon-image-swatch').removeClass('selected');
        $wrapper.find('.wc-pao-addon-image-swatch[data-value="' + value + '"]').addClass('selected');

        // Ensure parent is properly selected
        var $parent = $select_box.find('.wc-pao-addon-image-swatch[data-value="' + value + '"]').parent();
        if ($parent.length) {
            console.log('Parent of selected swatch:', $parent);
            // Apply selected-box class
            $select_box.find('.wc-pao-addon-image-swatch').parent().removeClass('selected-box');
            $parent.addClass('selected-box');
        } else {
            console.error('Parent not found for swatch:', value);
        }
        // Display selected label below swatches.
        $selected.html(label);
        // Actualiza el valor del campo oculto correspondiente
        var $hiddenField = $wrapper.find('select.wc-pao-addon-image-swatch-select');
        $hiddenField.val(value).change(); // Dispara el evento change para actualizar el estado del campo

        if (window.WC_PAO && window.WC_PAO.initialized_forms) {
            window.WC_PAO.initialized_forms.forEach((function (form) {
                form.validation.validateAddon($wrapper.find('select.wc-pao-addon-field'), true);
                form.updateTotals();
                form.totals.render();
            }).bind(this));
        }
        //$hiddenField.change(); // Dispara el evento change para actualizar el estado del campo

        //window.WC_PAO.Form.validation.validateAddon( $wrapper.find( 'select.wc-pao-addon-field' ), true );
        //window.WC_PAO.Form.updateTotals();

        /*
        //Art Project Group
        //Corrige el error con los add-ons condicionales limpiando la selección previa
        if ( $wrapper.attr('class').match(/.wc-pao-addon-[0-9]+-0/) ) {
            $('#addons').hide();
            setTimeout(function() { 
                $('div.wc-pao-addon-wrap:not([class*="-0"]) .wc-pao-addon-image-swatch').removeClass('selected');
                $('div.wc-pao-addon-wrap:not([class*="-0"]) .wc-pao-addon-radio-wrapper input[type="radio"]:checked').prop('checked', false);
                $('div.wc-pao-addon-wrap:not([class*="-0"]) select.wc-pao-addon-image-swatch-select option:selected').prop("selected", false).change();
                $('#addons').show();
            }, 400);
        }
        //Art Project Group
        */
    });
});
/* update js end */

jQuery(document).ready(function () {
    jQuery('.resume-tab-title-top-righ-arrow').on('click', function () {
        // Toggle the visibility of the corresponding resume-tab-title-bottom within this container
        var container = jQuery(this).closest('.tab-resume');
        var bottomContent = container.find('.resume-tab-title-bottom');
        var title = container.find('.resume-tab-title-top .h4');
        var title_p = container.find('.resume-tab-title-top-right-text');
        var heading = container.find('.resume-tab-title-top');

        // Toggle visibility and classes for each section independently
        bottomContent.toggle();

        if (bottomContent.is(':visible')) {
            title.addClass('open');
            title.text('Resumen De Seleccion'); // Change text when open
            title_p.addClass('hide');
            heading.addClass('heding-border');
        } else {
            title.removeClass('open');
            title_p.removeClass('hide');
            title.text('Ver Resumen De Seleccion'); // Change text when closed
            heading.removeClass('heding-border');
        }

        // Toggle the arrow icon within this specific container
        jQuery(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
    });

    jQuery('.button-open-customizer').on('click', function (event) {
        event.preventDefault();
        jQuery('body').addClass('open-nav');
    });

    jQuery('.button-close-customizer , .single_add_to_cart_button_custom').on('click', function (event) {
        event.preventDefault();
        jQuery('body').removeClass('open-nav');
    });

});

