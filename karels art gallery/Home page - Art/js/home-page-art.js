$(document).ready(function () {
    $(".latest-img").slice(0, 6).show();
     $("#seeMore").on('click', function (e) {
         e.preventDefault();
         $(".latest-img:hidden").slice(0, 3).slideDown();
         if ($(".latest-img:hidden").length == 0) {
             $("#seeMore").remove();
         }
         
         $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
     });

})