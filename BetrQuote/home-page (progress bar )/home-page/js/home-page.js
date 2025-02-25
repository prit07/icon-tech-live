$(document).ready(function () {
    $('.fieldset-inner-box .fieldset-inner-box-col').click(function () {
        $('.fieldset-inner-box-col').removeClass("active");
        $(this).addClass("active");
    });

    const totalFieldsets = $(".fieldset-wapper").length;
    let currentStep = 0; // Track the current step

    function updateProgress() {
        const progressPercentage = (currentStep / (totalFieldsets - 1)) * 100;
        $(".progress-bg > div").css("width", progressPercentage + "%");
        $(".progress-text").text(progressPercentage + "% Complete");
    }

    $(".btn-next").click(function () {
        const activeFieldset = $(".fieldset-active");

        // Only proceed if there is a next fieldset
        if (currentStep < totalFieldsets - 1) {
            activeFieldset.removeClass("fieldset-active");
            currentStep++;
            const nextFieldset = $(".fieldset-wapper").eq(currentStep);
            nextFieldset.addClass("fieldset-active");
            updateProgress();
        }
    });

    $(".btn-back").click(function () {
        const activeFieldset = $(".fieldset-active");

        // Only proceed if there is a previous fieldset
        if (currentStep > 0) {
            activeFieldset.removeClass("fieldset-active");
            currentStep--;
            const prevFieldset = $(".fieldset-wapper").eq(currentStep);
            prevFieldset.addClass("fieldset-active");
            updateProgress();
        }
    });

    // Initialize progress for the first fieldset
    updateProgress();
});


