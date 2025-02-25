$(document).ready(function () {
    $('.cm-flag-dropdown').click(function () {
        $(this).toggleClass('cm-flag-dropdown__options--visible');
    });

    $('.cm-flag-dropdown .cm-flag-dropdown__options .cm-flag-dropdown__option').click(function () {
        var selectedHtml = $(this).html();
        var selectedText = $(this).text();
        $(this).closest('.cm-flag-dropdown').find('.cm-flag-dropdown__selected').html(selectedHtml);
    });

})


