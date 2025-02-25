$(document).ready(function () {
  /* menu js start*/
  $("#filter-toggle-btn, .filter-overlay-bg").click(function (e) {
    e.preventDefault();
    $(".filter-toggle-btn").toggleClass("open");
    $("#filter-sidebar-wrapper").toggleClass("filter-menu-active");
    $('.filter-overlay-bg').toggleClass('filter-bg-active');
    $('body').toggleClass('open-nav');
  });

  $('#close-sidebar').click(function () {
    $('#filter-sidebar-wrapper').removeClass('filter-menu-active');
    $('.filter-overlay-bg').removeClass('filter-bg-active');
    $('body').toggleClass('open-nav');
  });


  // jQuery(".filter-sidebar_accordion_item:first-child").addClass("active").children(".filter-sidebar_content").slideDown();
  jQuery(".filter-sidebar_accordion_item .filter-sidebar_menu").on("click", function () {
    if (jQuery(this).parent().hasClass("active")) {
      jQuery(this).next().slideUp();
      jQuery(this).parent().removeClass("active");
    }
    else {
      jQuery(".filter-sidebar_content").slideUp();
      jQuery(".filter-sidebar_accordion_item").removeClass("active");
      jQuery(this).parent().addClass("active");
      jQuery(this).next().slideDown();
    }
  })

  // subcategory start
  // jQuery(".filter-sub-faq_accordion_item .filter-sub-faq_menu").on("click", function () {
  //   if (jQuery(this).parent().hasClass("active")) {
  //     jQuery(this).next().slideUp();
  //     jQuery(this).parent().removeClass("active");
  //   }
  //   else {
  //     jQuery(".filter-sub-faq_content").slideUp();
  //     jQuery(".filter-sub-faq_accordion_item ").removeClass("active");
  //     jQuery(this).parent().addClass("active");
  //     jQuery(this).next().slideDown();
  //   }
  // });


  $('.filter-sub-faq_accordion_item .filter-sub-faq_menu a').click(function (e) {
    e.preventDefault();

    var main_item = $(this).closest('.filter-sub-faq_accordion_item');
    var main_cart = main_item.find('.filter-sub-faq_content');

    if (main_item.hasClass('active')) {
      // If the clicked item is already active, just toggle the content
      main_item.removeClass('active');
      $('.filter-sub-faq_content').removeClass('protein-main-block');
    } else {

      // Hide content of all items and remove active class from all items
      $('.filter-sub-faq_accordion_item').removeClass('active');
      $('.filter-sub-faq_content').removeClass('protein-main-block');

      // Show the content of the clicked item and add the active class
      main_cart.addClass('protein-main-block');
      main_item.addClass('active');
    }
  });

// replace js

  // jQuery(".filter-sub-cate-card-item .filter-sub-cate-card").on("click", function () {
  //   if (jQuery(this).parent().hasClass("active")) {
  //     jQuery(this).next().slideUp();
  //     jQuery(this).parent().removeClass("active");
  //   }
  //   else {
  //     jQuery(".filter-sub-cate-card-content").slideUp();
  //     jQuery(".filter-sub-cate-card-item ").removeClass("active");
  //     jQuery(this).parent().addClass("active");
  //     jQuery(this).next().slideDown();
  //   }
  // });

  // jQuery(".filter-sub-cate-card-sub-item .filter-sub-cate-card-sub").on("click", function () {
  //   if (jQuery(this).parent().hasClass("active")) {
  //     jQuery(this).next().slideUp();
  //     jQuery(this).parent().removeClass("active");
  //   }
  //   else {
  //     jQuery(".filter-sub-cate-card-sub-content").slideUp();
  //     jQuery(".filter-sub-cate-card-sub-item ").removeClass("active");
  //     jQuery(this).parent().addClass("active");
  //     jQuery(this).next().slideDown();
  //   }
  // });





  // filter-sub-cate-card-item
  $('.filter-sub-cate-card-item .filter-sub-cate-card a').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.filter-sub-cate-card-item');
    var cart = item.find('.filter-sub-cate-card-content');

    if (item.hasClass('active')) {
      // If the clicked item is already active, just toggle the content
      item.removeClass('active');
      $('.filter-sub-cate-card-content').removeClass('protein-cart-block');
    } else {

      // Hide content of all items and remove active class from all items
      $('.filter-sub-cate-card-item').removeClass('active');
      $('.filter-sub-cate-card-content').removeClass('protein-cart-block');

      // Show the content of the clicked item and add the active class
      cart.addClass('protein-cart-block');
      item.addClass('active');
    }
  });

  // filter-sub-cate-card-sub-item
  $('.filter-sub-cate-card-sub-item .filter-sub-cate-card-sub a').click(function (e) {
    e.preventDefault();

    var item_sub = $(this).closest('.filter-sub-cate-card-sub-item');
    var cart_sub = item_sub.find('.filter-sub-cate-card-sub-content');

    if (item_sub.hasClass('active')) {
      // If the clicked item is already active, just toggle the content
      item_sub.removeClass('active');
      $('.filter-sub-cate-card-sub-content').removeClass('protein-cart-block-sub');
    } else {

      // Hide content of all items and remove active class from all items
      $('.filter-sub-cate-card-sub-item').removeClass('active');
      $('.filter-sub-cate-card-sub-content').removeClass('protein-cart-block-sub');

      // Show the content of the clicked item and add the active class
      cart_sub.addClass('protein-cart-block-sub');
      item_sub.addClass('active');
    }
  });

  // replace js





  jQuery(".itpl_filter_cat .filter-sub-faq_menu").on("click", function () {
    if (jQuery(this).parent().hasClass("active")) {
      jQuery(this).next().slideUp();
      jQuery(this).parent().removeClass("active");
    }
    else {
      jQuery(".filter-sub-faq_content").slideUp();
      jQuery(".itpl_filter_cat ").removeClass("active");
      jQuery(this).parent().addClass("active");
      jQuery(this).next().slideDown();
    }
  });

  // Function to handle category menu click
  $(".itpl_filter_cat .filter-sub-faq_menu").on("click", function () {
    if ($(this).parent().hasClass("active")) {
      $(this).next().slideUp();
      $(this).parent().removeClass("active");
    } else {
      $(".filter-sub-faq_content").slideUp();
      $(".itpl_filter_cat ").removeClass("active");
      $(this).parent().addClass("active");
      $(this).next().slideDown();
    }
  });

})



// $(document).ready(function () {
//   // Check if sidebar should be open based on local storage
//   var isSidebarOpen = localStorage.getItem("sidebarOpen") === "true";
//   if (isSidebarOpen) {
//     $(".filter-toggle-btn").addClass("open");
//     $("#filter-sidebar-wrapper").addClass("filter-menu-active");
//     $('.filter-overlay-bg').addClass('filter-bg-active');
//     $('body').addClass('open-nav');
//   }

//   // Toggle filter menu
//   $("#filter-toggle-btn, .filter-overlay-bg").click(function (e) {
//     e.preventDefault();
//     $(".filter-toggle-btn").toggleClass("open");
//     $("#filter-sidebar-wrapper").toggleClass("filter-menu-active");
//     $('.filter-overlay-bg').toggleClass('filter-bg-active');
//     $('body').toggleClass('open-nav');

//     // Update local storage
//     var isOpen = $("#filter-sidebar-wrapper").hasClass("filter-menu-active");
//     localStorage.setItem("sidebarOpen", isOpen);
//   });

//   // Close sidebar
//   $('#close-sidebar').click(function () {
//     $('#filter-sidebar-wrapper').removeClass('filter-menu-active');
//     $('.filter-overlay-bg').removeClass('filter-bg-active');
//     $('body').toggleClass('open-nav');

//     // Update local storage
//     localStorage.setItem("sidebarOpen", false);
//   });

//   // Accordion for main menu
//   $(".filter-sidebar_accordion_item .filter-sidebar_menu").on("click", function () {
//     var $accordionItem = $(this).parent();
//     if ($accordionItem.hasClass("active")) {
//       $accordionItem.removeClass("active").children(".filter-sidebar_content").slideUp();
//     } else {
//       $(".filter-sidebar_accordion_item").removeClass("active").children(".filter-sidebar_content").slideUp();
//       $accordionItem.addClass("active").children(".filter-sidebar_content").slideDown();
//     }
//   });

//   // Accordion for subcategory
//   $(".filter-sub-faq_accordion_item .filter-sub-faq_menu, .itpl_filter_cat .filter-sub-faq_menu").on("click", function () {
//     var $accordionItem = $(this).parent();
//     if ($accordionItem.hasClass("active")) {
//       $accordionItem.removeClass("active").children(".filter-sub-faq_content").slideUp();
//     } else {
//       $(".filter-sub-faq_accordion_item, .itpl_filter_cat").removeClass("active").children(".filter-sub-faq_content").slideUp();
//       $accordionItem.addClass("active").children(".filter-sub-faq_content").slideDown();
//     }
//   });

//   jQuery(".itpl_filter_cat .filter-sub-faq_menu").on("click", function () {
//     if (jQuery(this).parent().hasClass("active")) {
//       jQuery(this).next().slideUp();
//       jQuery(this).parent().removeClass("active");
//     }
//     else {
//       jQuery(".filter-sub-faq_content").slideUp();
//       jQuery(".itpl_filter_cat ").removeClass("active");
//       jQuery(this).parent().addClass("active");
//       jQuery(this).next().slideDown();
//     }
//   });

//   // Function to handle category menu click
//   $(".itpl_filter_cat .filter-sub-faq_menu").on("click", function() {
//     if ($(this).parent().hasClass("active")) {
//       $(this).next().slideUp();
//       $(this).parent().removeClass("active");
//     } else {
//       $(".filter-sub-faq_content").slideUp();
//       $(".itpl_filter_cat ").removeClass("active");
//       $(this).parent().addClass("active");
//       $(this).next().slideDown();
//     }
//   });

// });




// $(document).ready(function () {
//   /* menu js start*/
//   $("#filter-toggle-btn, .filter-overlay-bg").click(function (e) {
//     e.preventDefault();
//     $(".filter-toggle-btn").toggleClass("open");
//     $("#filter-sidebar-wrapper").toggleClass("filter-menu-active");
//     $('.filter-overlay-bg').toggleClass('filter-bg-active');
//     $('body').toggleClass('open-nav');
//   });

//   $('#close-sidebar').click(function () {
//     $('#filter-sidebar-wrapper').removeClass('filter-menu-active');
//     $('.filter-overlay-bg').removeClass('filter-bg-active');
//     $('body').toggleClass('open-nav');
//   });


//   jQuery(".filter-sidebar_accordion_item .filter-sidebar_menu").on("click", function () {
//     if (jQuery(this).parent().hasClass("active")) {
//       jQuery(this).next().slideUp();
//       jQuery(this).parent().removeClass("active");
//     } else {
//       jQuery(".filter-sidebar_content").slideUp();
//       jQuery(".filter-sidebar_accordion_item").removeClass("active");
//       jQuery(this).parent().addClass("active");
//       jQuery(this).next().slideDown();
//     }
//   });

//   // subcategory start
//   jQuery(".filter-sub-faq_accordion_item .filter-sub-faq_menu").on("click", function () {
//     if (jQuery(this).parent().hasClass("active")) {
//       jQuery(this).next().slideUp();
//       jQuery(this).parent().removeClass("active");
//     } else {
//       jQuery(".filter-sub-faq_content").slideUp();
//       jQuery(".filter-sub-faq_accordion_item ").removeClass("active");
//       jQuery(this).parent().addClass("active");
//       jQuery(this).next().slideDown();
//     }
//   });

//   // Checkbox handling without refresh
//   $(".filter-sidebar_content input[type='checkbox']").on("change", function() {
//     var checkedValue = $(this).val();
//     var content = $(".filter-sidebar_content").find("[data-search-filter='" + checkedValue + "']");
//     if (content.length) {
//       if ($(this).is(":checked")) {
//         content.slideDown();
//       } else {
//         content.slideUp();
//       }
//     } 
//   });

//   // Function to handle category menu click
//   $(".itpl_filter_cat .filter-sub-faq_menu").on("click", function() {
//     if ($(this).parent().hasClass("active")) {
//       $(this).next().slideUp();
//       $(this).parent().removeClass("active");
//     } else {
//       $(".filter-sub-faq_content").slideUp();
//       $(".itpl_filter_cat ").removeClass("active");
//       $(this).parent().addClass("active");
//       $(this).next().slideDown();
//     }
//   });

// });

// $(document).ready(function () {
// $('input[type=checkbox').click(function(){
//   window.location.hash = 'cfilter=' + $(this).val();
// });
// });


// $(document).ready(function () {
//   // Checkbox  without refresh page
//   $(".filter-sidebar_content input[type='checkbox']").on("change", function() {
//     var checkedValue = $(this).val();
//     var content = $(this).closest(".filter-sidebar_content").find("[data-search-filter='" + checkedValue + "']");

//     if ($(this).is(":checked")) {
//       content.slideDown();
//     } else {
//       content.slideUp();
//     }
//   });

//   // Function to handle category menu click
//   $(".itpl_filter_cat .filter-sub-faq_menu").on("click", function() {
//     if ($(this).parent().hasClass("active")) {
//       $(this).next().slideUp();
//       $(this).parent().removeClass("active");
//     } else {
//       $(".filter-sub-faq_content").slideUp();
//       $(".itpl_filter_cat ").removeClass("active");
//       $(this).parent().addClass("active");
//       $(this).next().slideDown();
//     }
//   });
// });



// $(document).ready(function () {
//   $("#filter-toggle-btn, .filter-overlay-bg").click(function (e) {
//     e.preventDefault();
//     $(".filter-toggle-btn").toggleClass("open");
//     $("#filter-sidebar-wrapper").toggleClass("filter-menu-active");
//     $('.filter-overlay-bg').toggleClass('filter-bg-active');
//     $('body').toggleClass('open-nav');
//   });

//   // Function to close the filter menu
//   $('#close-sidebar').click(function () {
//     $('#filter-sidebar-wrapper').removeClass('filter-menu-active');
//     $('.filter-overlay-bg').removeClass('filter-bg-active');
//     $('body').toggleClass('open-nav');
//   });

//   // Function to handle accordion behavior for main filters
//   $(".filter-sidebar_accordion_item .filter-sidebar_menu").on("click", function () {
//     if ($(this).parent().hasClass("active")) {
//       $(this).next().slideUp();
//       $(this).parent().removeClass("active");
//     } else {
//       $(".filter-sidebar_content").slideUp();
//       $(".filter-sidebar_accordion_item").removeClass("active");
//       $(this).parent().addClass("active");
//       $(this).next().slideDown();
//     }
//   });

//   // Function to handle accordion behavior for sub-filters
//   $(".filter-sub-faq_accordion_item .filter-sub-faq_menu").on("click", function () {
//     if ($(this).parent().hasClass("active")) {
//       $(this).next().slideUp();
//       $(this).parent().removeClass("active");
//     } else {
//       $(".filter-sub-faq_content").slideUp();
//       $(".filter-sub-faq_accordion_item ").removeClass("active");
//       $(this).parent().addClass("active");
//       $(this).next().slideDown();
//     }
//   });

//   // Function to handle accordion behavior for filter categories
//   $(".itpl_filter_cat .filter-sub-faq_menu").on("click", function () {
//     if ($(this).parent().hasClass("active")) {
//       $(this).next().slideUp();
//       $(this).parent().removeClass("active");
//     } else {
//       $(".filter-sub-faq_content").slideUp();
//       $(".itpl_filter_cat ").removeClass("active");
//       $(this).parent().addClass("active");
//       $(this).next().slideDown();
//     }
//   });

//   // Function to handle checkbox changes checkbox click and without page reference working
//   $(".filter-sidebar_content input[type='checkbox']").on("change", function() {
//     var checkedValue = $(this).val();
//     if ($(this).is(":checked")) {
//       $(".filter-sidebar_content").find("[data-search-filter='" + checkedValue + "']").slideDown();
//     } else {
//       $(".filter-sidebar_content").find("[data-search-filter='" + checkedValue + "']").slideUp();
//     }
//   });


// })

$(document).ready(function () {
  $(".filter-sidebar_content input[type='checkbox']").on("change", function () {
    updateFilteredData();
  });

  function updateFilteredData() {
    // Get the checked values of all checkboxes
    var checkedValues = $(".filter-sidebar_content input[type='checkbox']:checked").map(function () {
      return $(this).val();
    }).get();
    $.ajax({
      type: "GET",
      url: "/your-backend-endpoint",
      data: { filters: checkedValues },
      success: function (response) {
        $("#filtered-data").html(response);
      },
      error: function (xhr, status, error) {
        console.error("AJAX Error:", status, error);
      }
    });
  }
});



// Ensure the DOM is ready
// $(document).ready(function() {
//   var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
//       $checkboxes = $("#checkbox-container :checkbox");

//   $checkboxes.on("change", function() {
//     $checkboxes.each(function() {
//       checkboxValues[this.id] = this.checked;
//     });

//     localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
//   });

//   // On page load
//   $.each(checkboxValues, function(key, value) {
//     $("#" + key).prop('checked', value);
//   });
// });


// $(document).ready(function(){
//   $('input:checkbox').on('change',function(){
//     const checkdata= $(this).val();

//       if ($(this).prop('checked')) {

//         $.ajax({
//           type:"POST",
//           url:"urlCheck",
//           data:{"checkdata":checkdata},
//            success(function (data){
//             $('.container-todolist').load(urlList);
//           })
//         });
//       }
//     });
// })



jQuery(".filter-sub-faq_accordion_item .filter_sub_faq_menu").on("click", function () {
  if (jQuery(this).parent().hasClass("active")) {
    jQuery(this).parent().removeClass("active");
  } else {
    jQuery(".filter-sub-faq_accordion_item ").removeClass("active");
    jQuery(this).parent().addClass("active");
  }
});







// $('.filter-sub-faq_accordion_item .filter_sub_faq_menu a').click(function(e) {
//   e.preventDefault();
//   var main_item = $(this).closest('.filter-sub-faq_accordion_item');
//   var main_cart = main_item.find('.filter_sub_category');
//   if (main_item.hasClass('active')) {
//       main_item.removeClass('active');
//       $('.filter_sub_category').removeClass('protein-main-block');
//   } else {
//       $('.filter-sub-faq_accordion_item').removeClass('active');
//       $('.filter_sub_category').removeClass('protein-main-block');
//       main_cart.addClass('protein-main-block');
//       main_item.addClass('active');
//   }
// });