$(document).ready(function () {
    $(".greenbot-rubric-list-item").slice(0, 6).show();
     $("#seeMore").on('click', function (e) {
         e.preventDefault();
         $(".greenbot-rubric-list-item:hidden").slice(0, 3).slideDown();
         if ($(".greenbot-rubric-list-item:hidden").length == 0) {
             $("#seeMore").remove();
         }
         
         $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
     });

})