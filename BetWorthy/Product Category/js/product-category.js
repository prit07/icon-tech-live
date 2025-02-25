$(document).ready(function(){
  


// pc-hint-wrap

  
$(function () {
  $('[data-toggle="popover"]').popover()
})


// top-rating-item-circle-view  

  $('.radial-progress').each(function() {
       $(this).find('.circle .mask.full, .circle .fill:not(.fix)').animate({
           borderSpacing: $(this).attr('data-rating') * 18
       }, {
           step: function(now, fx) {
               $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
               $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
               $(this).css('transform', 'rotate(' + now + 'deg)')
           },
           duration: 'slow'
       }, 'linear');
       $(this).find('.circle .fill.fix').animate({
           borderSpacing: $(this).attr('data-rating') * 36
       }, {
           step: function(now, fx) {
               $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
               $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
               $(this).css('transform', 'rotate(' + now + 'deg)')
           },
           duration: 'slow'
       }, 'linear')

       var dd =  $(this).attr('data-rating');
       $(this).find('.percentage').html(dd);

   });


 
})
