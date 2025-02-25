document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
    }
});


$(document).ready(function () {
    $("#m-toggle-btn, .m-overlay-bg").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(".m-toggle-btn").toggleClass("open");
        $("#m-sidebar-wrapper").toggleClass("m-menu-active");
        $('.m-overlay-bg').toggleClass('m-bg-active');
        $('body').toggleClass('open-nav');
    });


    $('.purschase-via-paypal-header ul li a').on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 120
        }, 800);
    });

    let yesHref = ''; 
    let noHref = ''; 

    $(".license-option-btn button").click(function (e) {
        e.preventDefault();
        const form = $(this).closest("form")[0];
        const formData = new FormData(form);
        const selectedLicense = formData.get('license');

        switch (selectedLicense) {
            case 'upgrade':
                window.location.href = 'https://checkout.bluesnap.com/buynow/checkout?sku1858868=1&storeid=8170';
                break;
            case 'LifeAssurance':
                $("#modalMessage").text("Do you want to purchase Lifetime Upgrade Assurance?");
                yesHref = 'https://checkout.bluesnap.com/buynow/checkout?sku1910186=1&storeid=8170';
                noHref = 'https://checkout.bluesnap.com/buynow/checkout?sku1638249=1&storeid=8170';
                $("#confirmationModal").modal('show'); 
                break;
            case 'HomeAssurance':
                $("#modalMessage").text("Do you want to purchase Home License Add-On?");
                yesHref = 'https://checkout.bluesnap.com/buynow/checkout?sku1658510=1&storeid=8170';
                noHref = 'https://checkout.bluesnap.com/buynow/checkout?sku1638249=1&storeid=8170';
                $("#confirmationModal").modal('show'); 
                break;
            default:
                window.location.href = 'https://checkout.bluesnap.com/buynow/checkout?sku1638249=1&storeid=8170';
                break;
        }
    });

    // Handle "Yes" button click (redirect to yesHref)
    $("#confirmYes").click(function () {
        window.location.href = yesHref;
    });

    // Handle "No" button click (redirect to noHref)
    $("#confirmNo").click(function () {
        window.location.href = noHref;
    });


})

