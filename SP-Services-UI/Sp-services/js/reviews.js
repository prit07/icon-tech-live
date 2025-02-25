$(document).ready(function () {


    // review page stare
    $('.stars-rating').each(function (event) {
        var rating = $(this).attr('rating');
        var i;
        for (i = 0; (i < rating); i++) {
            $(this).find('span.star').eq(i).addClass('filled');
        }
        if (rating % 1 > 0)
            $(this).find('span.star').eq(i - 1).addClass('half-filled');
        $(this).siblings('h6').text(rating);
    });

    $(".customer-reviews-items").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".customer-reviews-items:hidden").slice(0, 3).slideDown();
        if ($(".customer-reviews-items:hidden").length == 0) {
            $("#loadMore").remove();
        }
    });
})