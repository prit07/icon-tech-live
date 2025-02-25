$(document).ready(function () {


    $(".service-items").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".service-items:hidden").slice(0, 3).slideDown();
        if ($(".service-items:hidden").length == 0) {
            $("#loadMore").remove();
        }
    });
})