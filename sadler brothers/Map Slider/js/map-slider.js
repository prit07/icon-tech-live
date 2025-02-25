// $(document).ready(function(){

// $('.owl-map-slider').owlCarousel({
//     center:true,
//     loop:true,
//     margin:0,
//     nav:true,
//     dots:false,
//     navText: [
//         '<span><i class="fa-solid fa-chevron-left"></i></span>',
//         '<span><i class="fa-solid fa-chevron-right"></i></span>'
//       ],
//     responsive:{
//         0:{
//             items:1
//         },
//         500:{
//             center:false,
//             margin:10,
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
// })


$(document).ready(function () {
   var bigimage = $("#big");
   var thumbs = $("#thumbs");
   var syncedSecondary = true;

   bigimage
      .owlCarousel({
         items: 1,
         nav: false,
         dots: false,
         loop: true,
         responsiveRefreshRate: 200,

      })
      .on("changed.owl.carousel", syncPosition);

   thumbs
      .on("initialized.owl.carousel", function () {
         thumbs
         .find(".owl-item")
         .eq(0)
         .addClass("current");

      })
      .owlCarousel({
         items: 3,
         center: true,
         loop: true,
         dots: false,
         nav: true,
         navText: [
            '<i class="fa fa-arrow-left" ></i>',
            '<i class="fa fa-arrow-right"></i>'
         ],
         smartSpeed: 200,
         slideSpeed: 500,
         slideBy: 1,
         responsiveRefreshRate: 100
      })
      .on("changed.owl.carousel", syncPosition2);

   function syncPosition(el) {

      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - .5);

      if (current < 0) {
         current = count;
      }
      if (current > count) {
         current = 0;
      }
      //to this
      thumbs
         .find(".owl-item")
         .removeClass("current")
         .eq(current)
         .addClass("current");
      var onscreen = thumbs.find(".owl-item.active").length - 1;
      var start = thumbs
         .find(".owl-item.active")
         .first()
         .index();
      var end = thumbs
         .find(".owl-item.active")
         .last()
         .index();

      if (current > end) {
         thumbs.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
         thumbs.data("owl.carousel").to(current - onscreen, 100, true);
      }
   }

   function syncPosition2(el) {
      if (syncedSecondary) {
         var number = el.item.index;
         bigimage.data("owl.carousel").to(number, 100, true);
      }
   }

   thumbs.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      bigimage.data("owl.carousel").to(number, 300, true);
   });
});


