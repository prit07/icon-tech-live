    $(document).ready(function () {
        $(".variants-popup_content").each(function () {
            var $this = $(this),
                $select = $this.find("select"),
                $selected = $("<div></div>").addClass("select-selected form-select css_attribute_select variants-select-color o_wsale_product_attribute js_variant_change itpl_variant_change always active").html($select.find("option:selected").html()),
                $items = $("<div></div>").addClass("select-items select-hide");

            // Create the dropdown items
            $select.find("option").each(function (i) {
                var $option = $(this);
                var $item = $("<div></div>").html($option.html()).on("click", function () {
                    var $clicked = $(this),
                        index = $clicked.index(); // Adjust index to account for all options

                    // Update the select element's selectedIndex
                    $select.prop("selectedIndex", index);

                    // Update the selected attribute on the select options
                    $select.find("option").removeAttr("selected");
                    $select.find("option").eq(index).attr("selected", "selected");

                    // Update the custom dropdown's displayed selected value
                    $selected.html($clicked.html());

                    // Manage the same-as-selected class
                    $clicked.addClass("same-as-selected").siblings().removeClass("same-as-selected");

                    // Close the dropdown
                    $selected.click();
                });

                // Add same-as-selected class if the option is selected initially
                if ($option.is(":selected")) {
                    $item.addClass("same-as-selected");
                }

                $items.append($item);
            });

            $this.append($selected).append($items);
            $selected.on("click", function (e) {
                e.stopPropagation();
                $(".select-items").not($items).addClass("select-hide");
                $(".select-selected").not($selected).removeClass("select-arrow-active");
                $items.toggleClass("select-hide");
                $selected.toggleClass("select-arrow-active");
            });
        });

        $(document).on("click", function () {
            $(".select-items").addClass("select-hide");
            $(".select-selected").removeClass("select-arrow-active");
        });
    });



    $(document).ready(function () {
        $(".variants-popup_content").each(function () {
            var $this = $(this),
                $select = $this.find("select"),
                $selected = $("<div></div>").addClass("select-selected form-select css_attribute_select variants-select-color o_wsale_product_attribute js_variant_change itpl_variant_change always active").html($select.find("option:selected").html()),
                $items = $("<div></div>").addClass("select-items select-hide");
    
            // Create the dropdown items
            $select.find("option").each(function (i) {
                var $option = $(this);
                var $item = $("<div></div>").html($option.html()).on("click", function () {
                    var $clicked = $(this),
                        index = $clicked.index(); // Adjust index to account for all options
    
                    // Update the select element's selectedIndex
                    $select.prop("selectedIndex", index);
    
                    // Update the selected attribute on the select options
                    $select.find("option").removeAttr("selected");
                    $select.find("option").eq(index).attr("selected", "selected");
    
                    // Update the custom dropdown's displayed selected value
                    $selected.html($clicked.html());
    
                    // Manage the same-as-selected class
                    $clicked.addClass("same-as-selected").siblings().removeClass("same-as-selected");
    
                    // Close the dropdown
                    $selected.click();
    
                    // Form submission handling
                    var productGrid = $this.closest("form").find(".o_wsale_products_grid_table_wrapper");
                    if (productGrid.length) {
                        productGrid.addClass("opacity-50");
                    }
                    $this.closest("form").submit();
                });
    
                // Add same-as-selected class if the option is selected initially
                if ($option.is(":selected")) {
                    $item.addClass("same-as-selected");
                }
    
                $items.append($item);
            });
    
            $this.append($selected).append($items);
            $selected.on("click", function (e) {
                e.stopPropagation();
                $(".select-items").not($items).addClass("select-hide");
                $(".select-selected").not($selected).removeClass("select-arrow-active");
                $items.toggleClass("select-hide");
                $selected.toggleClass("select-arrow-active");
            });
        });
    
        $(document).on("click", function () {
            $(".select-items").addClass("select-hide");
            $(".select-selected").removeClass("select-arrow-active");
        });
    });
    





$(document).ready(function () {
    $(".variants-popup_content").each(function () {
        var $this = $(this),
            $select = $this.find("select"),
            $selected = $("<div></div>").addClass("select-selected form-select css_attribute_select variants-select-color o_wsale_product_attribute js_variant_change itpl_variant_change always active").html($select.find("option:selected").html()),
            $items = $("<div></div>").addClass("select-items select-hide");

        // Create the dropdown items
        $select.find("option").each(function (i) {
            var $option = $(this);
            var $item = $("<div></div>").html($option.html()).on("click", function () {
                var $clicked = $(this),
                    index = $clicked.index(); // Adjust index to account for all options

                // Update the select element's selectedIndex
                $select.prop("selectedIndex", index);

                // Update the selected attribute on the select options
                $select.find("option").removeAttr("selected");
                $select.find("option").eq(index).attr("selected", "selected");

                // Update the custom dropdown's displayed selected value
                $selected.html($clicked.html());

                // Display selected value in .itpl_name div
                $(".itpl_name").text($clicked.html());

                // Manage the same-as-selected class
                $clicked.addClass("same-as-selected").siblings().removeClass("same-as-selected");

                // Close the dropdown
                $selected.click();

                // Submit the form
                if ($select.closest("form").length) {
                    var $form = $select.closest("form");

                    // Add opacity to the product grid (optional, as per your code)
                    var productGrid = $form.find(".o_wsale_products_grid_table_wrapper");
                    if (productGrid.length) {
                        productGrid.addClass("opacity-50");
                    }

                    // Submit the form
                    $form.submit();
                }
            });

            // Add same-as-selected class if the option is selected initially
            if ($option.is(":selected")) {
                $item.addClass("same-as-selected");
            }

            $items.append($item);
        });

        $this.append($selected).append($items);
        $selected.on("click", function (e) {
            e.stopPropagation();
            $(".select-items").not($items).addClass("select-hide");
            $(".select-selected").not($selected).removeClass("select-arrow-active");
            $items.toggleClass("select-hide");
            $selected.toggleClass("select-arrow-active");
        });
    });

    $(document).on("click", function () {
        $(".select-items").addClass("select-hide");
        $(".select-selected").removeClass("select-arrow-active");
    });
});







// _onChangeAttribute: function (ev) {
//         if (!ev.isDefaultPrevented()) {
//             ev.preventDefault();
//             const productGrid = this.el.querySelector(".o_wsale_products_grid_table_wrapper");
//             if (productGrid) {
//                 productGrid.classList.add("opacity-50");
//             }
//             $(ev.currentTarget).closest("form").submit();
//         }
//     }



// _onChangeAttribute: function (ev) {
//     if (!ev.defaultPrevented) {
//         ev.preventDefault();
//         const productGrid = this.el.querySelector(".o_wsale_products_grid_table_wrapper");
//         if (productGrid) {
//             productGrid.classList.add("opacity-50");
//         }

//         const form = ev.currentTarget.closest("form");
//         if (form) {
//             form.submit();
//         }
//     }
// }
