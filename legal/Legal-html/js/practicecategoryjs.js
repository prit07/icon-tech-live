$(document).ready(function(){
	// tab js

    $('.browse-tabs li').click(function(){
        $('.browse-tabs li').removeClass('active');
        $('.content').removeClass('active');
        var tid=$(this).attr('tab');
        $(this).addClass('active');
        $('#' +tid).addClass('active');
       });
});
