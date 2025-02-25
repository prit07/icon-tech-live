$(document).ready(function() {
    $('.captaingambling-stars-rating').each(function (event) {
        var rating = $(this).attr('rating');
        var i;
        for (i = 0; (i < rating); i++) {
            $(this).find('span.star').eq(i).addClass('filled');
        }
        if (rating % 1 > 0)
            $(this).find('span.star').eq(i - 1).addClass('half-filled');
    });
    function updateRatingValue() {
        $('.captaingambling-top-online-casinos-reating').each(function() {
            var rating = parseFloat($(this).find('.captaingambling-stars-rating').attr('rating'));
            $(this).find('#rating-change').html(rating.toFixed(1) + '/<span>5</span>');
        });
    }

    updateRatingValue();
});
