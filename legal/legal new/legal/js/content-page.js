$(document).ready(function () {


 /*Legal Guides js*/

 $(".legal-guides .Injury-Law-card-wapper").slice(0, 4).show();
 $("#legal-guides").on("click", function(e){
     e.preventDefault();
     $(".legal-guides .Injury-Law-card-wapper:hidden").slice(0, 4).slideDown();
     if($(".legal-guides .Injury-Law-card-wapper:hidden").length === 0) {
         $("#legal-guides").remove();
     }
 });	

 /*Legal Guides js*/

 $(".legal-research-card .Injury-Law-card-wapper").slice(0, 4).show();
 $("#legal-research-card").on("click", function(e){
     e.preventDefault();
     $(".legal-research-card .Injury-Law-card-wapper:hidden").slice(0, 4).slideDown();
     if($(".legal-research-card .Injury-Law-card-wapper:hidden").length === 0) {
         $("#legal-research-card").remove();
     }
 });	


});
