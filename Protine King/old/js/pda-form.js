$(document).ready(function () {
    const settings = {
        fill: '#000 ',
        background: '#000'
    };

    function applyFill($slider) {
        const percentage = 100 * ($slider.val() - $slider.attr('min')) / ($slider.attr('max') - $slider.attr('min'));
        const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
        $slider.css('background', bg);
    }
    $('.pda-range-slider').each(function () {
        const $slider = $(this).find('input');
        $slider.on('input', function () {
            const value = $(this).val();
            if ($(this).next('span').length > 0) {
                $(this).next('span').text(value);
            } else {
                $(this).siblings('.pda-range-slider-value').find('span').text(value);
            }
            applyFill($(this));
        });
        applyFill($slider);
    });


    $('.pda-from-btn-wapper').click(function(){
        $('.pda-from').hide();
        $('.pda-wapper').show();
        $('.pda-top-sect-wapper ul li').removeClass('active');
        $('.pda-top-sect-wapper ul li').eq(1).addClass('active');
	});
})