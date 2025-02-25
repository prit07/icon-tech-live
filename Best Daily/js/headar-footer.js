$(document).ready(function() {
    $('.header-sub-menu-bottom > a ').on('click', function(event) {
        event.preventDefault(); 
        const parentLi = $(this).parent('.header-sub-menu-bottom'); 

        if (parentLi.hasClass('active')) {
            parentLi.removeClass('active'); 
        } else {
            $('.header-sub-menu-bottom').removeClass('active');
            parentLi.addClass('active');
        }
    });
});