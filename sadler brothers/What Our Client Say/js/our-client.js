$(document).ready(function(){
  
    // Owl Our Services
    $('.owl-our-clint').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items:1,
        navText: [
            '<span><i class="fa-solid fa-chevron-left"></i></span>',
            '<span><i class="fa-solid fa-chevron-right"></i></span>'
          ],
    
    })


    // Our Clint Stars Rating

    $('.our-clint-stars-rating').each(function (event) {
        var rating = $(this).attr('rating');
        var i;
        for (i = 0; (i < rating); i++) {
            $(this).find('span.star').eq(i).addClass('filled');
        }
        if (rating % 1 > 0)
            $(this).find('span.star').eq(i - 1).addClass('half-filled');
    });
    

})