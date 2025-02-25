jQuery(document).ready(function ($) {
    var lastScrollY = 0;
    var ticking = false;

    window.addEventListener('scroll', function () {
        lastScrollY = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function () {
                var header = document.querySelector('.header-navigation');
                var topBar = document.querySelector('.top-bar');

                if (lastScrollY > 1) {
                    header.classList.add('sticky');
                    topBar.classList.add('hide-top-bar');
                } else {
                    header.classList.remove('sticky');
                    topBar.classList.remove('hide-top-bar');
                }
                ticking = false;
            });

            ticking = true;
        }
    });

    const estanteriaCardWrapper = jQuery('.estanteria-card-wapper');
    const sliderCentral = jQuery('.slider-central');

    jQuery(window).on('scroll', function () {
        // Get the top position of the slider-central element
        const sliderTop = sliderCentral.offset()?.top;
        const scrollTop = jQuery(window).scrollTop();

        // Check if the page has scrolled past the slider-central position
        if (scrollTop >= sliderTop) {
            estanteriaCardWrapper.addClass('sticky-cls');
        } else {
            estanteriaCardWrapper.removeClass('sticky-cls');
        }
    });

    document.getElementById('menu-hamburguesa-movil')?.addEventListener('click', function () {
        var sidebar = document.getElementById('m-sidebar-wrapper');
        var body = document.body;
        sidebar.classList.toggle('m-menu-active');
        body.classList.toggle('open-nav');
    });
});
