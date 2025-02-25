jQuery(document).ready(function () {

    let e, elems,last_h2;
    elems = document.querySelectorAll('.blog-details-left-wapper h2, .blog-details-left-wapper h3')
    var sub_ul=0;
    var h2=1;var h3=1;
    for (e =0; e < elems.length; e++) {
        if (elems[e].localName === 'h2'){
            if(elems[e].innerHTML != "" && elems[e].innerHTML != "&nbsp;"){
                elems[e].setAttribute('id', 'i-scroll-'+e);
                if(e != elems.length-1){
                    jQuery(".blog-dt-toc-ul").append("<li class='sub-li sb-e-"+e+"'><a href='#i-scroll-"+e+"' class='sub-a'><span>"+elems[e].innerHTML.replace(/<[^>]*>/g, "")+"</span></a><ul class='sub-of-sub' style='display:none;'></ul></li>");   
                }else{
                    jQuery(".blog-dt-toc-ul").append("<li class='sub-li sb-e-"+e+"'><a href='#i-scroll-"+e+"' class='sub-a'><span>"+elems[e].innerHTML.replace(/<[^>]*>/g, "")+"</span></a><ul class='sub-of-sub' style='display:none;'></ul></li>");
                }
                last_h2=e;
                h2=h2+1;
            }
        }else if (elems[e].localName === 'h3'){
            if(elems[e].innerHTML != "" && elems[e].innerHTML != "&nbsp;"){
                elems[e].setAttribute('id', 'i-scroll-'+e);
                jQuery(".blog-dt-toc-ul .sb-e-"+last_h2+" .sub-of-sub").append("<li><a href='#i-scroll-"+e+"'><span>"+elems[e].innerHTML.replace(/<[^>]*>/g, "").replace(h3+".", "")+"</span></a></li>");
                h3=h3+1;
            }
        }
    }

    let scrollLink = jQuery('.blog-dt-toc-ul li a');
    scrollLink.click(function(e) {
        e.preventDefault();
        jQuery('body,html').animate({
            scrollTop: jQuery(this.hash).offset().top
        }, 1000);
    });

    jQuery(window).scroll(function() {
        var scrollbarLocation = jQuery(this).scrollTop();
        scrollLink.each(function() {
            var sectionOffset = jQuery(this.hash).offset().top - 80;
            if ( sectionOffset <= scrollbarLocation ) {
                jQuery(this).parent().addClass('active');
                jQuery(this).parent().find( ".sub-of-sub" ).css( "display", "block" );
                jQuery(this).parent().siblings().removeClass('active');
                jQuery(this).parent().siblings().find( ".sub-of-sub" ).css( "display", "none" );
            }
        });
    });
});