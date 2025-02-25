$(document).ready(function () {
    $(".cu-collapse")
      .on("show.bs.collapse", function () {
        $(this)
          .prev(".cu-frequently-asked-card-header ")
          .find(".fa")
          .removeClass("fa-plus")
          .addClass("fa-minus");
      })
      .on("hide.bs.collapse", function () {
        $(this)
          .prev(".cu-frequently-asked-card-header ")
          .find(".fa")
          .removeClass("fa-minus")
          .addClass("fa-plus");
      });
  });
  