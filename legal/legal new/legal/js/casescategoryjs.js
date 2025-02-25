$(document).ready(function(){

    // tab js
    $('.appeals-court-tabs li').click(function(){
        $('.appeals-court-tabs li').removeClass('active');
        $('.content').removeClass('active');
        var tid=$(this).attr('tab');
        $(this).addClass('active');
        $('#' +tid).addClass('active');
       });


   
});
