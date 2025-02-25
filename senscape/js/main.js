jQuery(document).ready(function () {

    let lastSelectedChildTab = {};

    jQuery('.senscape-parent-tab-a').on('click', function () {
        let parentId = jQuery(this).data('id');

        $('.senscape-parent-tab-content').removeClass('senscape-parent-tab-active');

        let activeParentTab = $(`.senscape-parent-tab-content[data-id='${parentId}']`);
        activeParentTab.addClass('senscape-parent-tab-active');

        $('.senscape-parent-tab-a').removeClass('senscape-parent-active');
        $(this).addClass('senscape-parent-active');

        let lastChildTabId = lastSelectedChildTab[parentId] || activeParentTab.find('.senscape-lawyer-tab-a').first().data('id');
        if (lastChildTabId) {
            let lastChildTab = activeParentTab.find(`.senscape-lawyer-tab-a[data-id='${lastChildTabId}']`);
            if (lastChildTab.length) lastChildTab.trigger('click');
        }
    });


    $('.senscape-lawyer-tab-a').on('click', function () {
        let parentContainer = $(this).closest('.senscape-lawyer-tab-container');
        let parentId = $(this).closest('.senscape-parent-tab-content').data('id');

        parentContainer.find('.senscape-lawyer-tab').removeClass('senscape-lawyer-tab-active');

        let activeChildTab = parentContainer.find(`.senscape-lawyer-tab[data-id='${$(this).data('id')}']`);
        activeChildTab.addClass('senscape-lawyer-tab-active');

        parentContainer.find('.senscape-lawyer-tab-a').removeClass('senscape-lawyer-active-a');
        $(this).addClass('senscape-lawyer-active-a');

        lastSelectedChildTab[parentId] = $(this).data('id');
    });

    let firstParentTab = $('.senscape-parent-tab-a.parent-active');
    if (firstParentTab.length) {
        firstParentTab.trigger('click');
    }
});
