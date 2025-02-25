$(document).ready(function(){
  /* menu js start*/
  $("#e-toggle-btn, .e-overlay-bg").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $(".e-toggle-btn").toggleClass("open");
    $("#e-sidebar-wrapper").toggleClass("e-menu-active");
    $('.e-overlay-bg').toggleClass('e-bg-active');
    $('body').toggleClass('open-nav');
  });

  $(window).on('scroll',function(){  
    if ($(window).scrollTop() > 400) {
      $('#header').addClass("fixed");
    }
    else{
      $('#header').removeClass("fixed");
    }   
  });
  /* menu js end*/

  /*main slider js start*/
  $('#e-banner-slider').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:true,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    autoplay:false,
    animateOut: 'slideOutUp',
    items: 1,
  });
  /*main slider js end*/

  /*about tab js start*/
  jQuery('.tab-a').click(function(){  
    jQuery(".e-about-tab").removeClass('tab-active');
    jQuery(".e-about-tab[data-id='"+jQuery(this).attr('data-id')+"']").addClass("tab-active");
    jQuery(".tab-a").removeClass('active-a');
    jQuery(this).parent().find(".tab-a").addClass('active-a');
  });
  /*about tab js end*/

  /*courses slider js start*/
  var owl = $('#e-courses-slider').owlCarousel({
    loop:true,
    margin:15,
    dots:true,
    nav:false,
    autoplay:false,
    responsive:{
      0:{ items:1 },
      768:{ items:2 },
      1024:{ items:3 }
    }
  });
  /*courses slider js end*/

  /* funfact js start*/
  $('.e-count-num').each(function (){
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  /* funfact js end*/

  /*team slider js start*/
  var owl = $('#e-team-slider').owlCarousel({
    loop:true,
    margin:15,
    dots:true,
    center: true,
    nav:true,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    autoplay:false,
    responsive:{
      0:{ items:1 },
      768:{ items:1 },
      1024:{ items:3 }
    }
  });
  /*team slider js end*/

  /* testimonials slider js start */
  var owl = $('#e-testimonials-slider').owlCarousel({
    loop:true,
    margin:15,
    dots:true,
    center: true,
    nav:false,
    autoplay:false,
    responsive:{
      0:{ items:1 },
      768:{ items:1 },
      1024:{ items:3 }
    }
  });
  /* testimonials slider js end */

  /* blog slider js start*/
  var owl = $('#e-blog-wapper').owlCarousel({
    loop:true,
    margin:15,
    dots:true,
    nav:false,
    autoplay:false,
    responsive:{
      0:{ items:1 },
      768:{ items:1 },
      1024:{ items:3 }
    }
  });
  /* blog slider js end*/

});