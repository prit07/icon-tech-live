jQuery(document).ready(function () {



    $(".ourworkbtn ul li a").click(function () {
        var value = $(this).attr('data-filter');
        console.log(value);

        if (value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }

        $(".ourworkbtn ul li a").removeClass("active-1");
        $(this).addClass("active-1");
    });
    $(".ourworkbtn #all").addClass("active-1");


    // load more js
    jQuery(".portfolio-section .work-item").slice(0, 20).addClass('active-1');
    jQuery("#see_more").on("click", function(e){
     e.preventDefault();
     jQuery(".portfolio-section .work-item:hidden").slice(0, 4).addClass('active-1');
     if(jQuery(".portfolio-section .work-item:hidden").length == 0) {
         jQuery("#see_more").text("No Content").addClass("d-none");
     }
 });

    jQuery('.portfolio-section .work-row').each(function(){
        var portfoli_box = jQuery('.portfolio-section .work-item').length;
        if (portfoli_box == 20) {
            jQuery("#see_more").addClass('d-none')
        }
    })


});