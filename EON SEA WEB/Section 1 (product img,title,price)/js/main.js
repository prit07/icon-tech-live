$(document).ready(function(){
    
    const secondOwlCarousel = document.createElement('div');
    secondOwlCarousel.classList.add('owl-carousel');
    secondOwlCarousel.id = 'second-slider'; 
    
    const firstSliderImages = document.querySelectorAll('#product-details-slider .item img');

    firstSliderImages.forEach(img => {
        const slideItem = document.createElement('div');
        slideItem.classList.add('item');
        
        const imgCopy = img.cloneNode(true); 
        
        slideItem.appendChild(imgCopy); 
        secondOwlCarousel.appendChild(slideItem);
    });
    
    
    $('.product-details-slider-wapper').append(secondOwlCarousel);
    $("#second-slider").owlCarousel({    
        loop: false,
        margin: 0, 
        stagePadding: 0,
        autoplay: false,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        dots:false,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
    
    
    $('#second-slider .item img').on('click', function() {
        const newImageSrc = $(this).attr('src');
        $('#product-details-slider .owl-item.active .item img').attr('src', newImageSrc);
    });

    $("#product-details-slider").owlCarousel({    
        loop: true,
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: false
    });
  
});
