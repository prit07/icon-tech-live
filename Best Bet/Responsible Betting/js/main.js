$(document).ready(function () {
	// table of content
    let e, elems,last_h2;
	elems = document.querySelectorAll('.responsible-betting-col-right h2')
	var sub_ul=0;
	var h2=1;

	for (e =0; e < elems.length; e++) {
		if (elems[e].localName === 'h2'){
			if(elems[e].innerHTML != "" && elems[e].innerHTML != "&nbsp;"){
				elems[e].setAttribute('id', 'i-scroll-'+e);
				if(e != elems.length-1){
					jQuery(".sidebar-ul").append("<li class='sub-li sb-e-"+e+"'><a href='#i-scroll-"+e+"' class='sub-a'>"+elems[e].innerHTML.replace(/<[^>]*>/g, "")+"</a></li>");	
				}else{
					jQuery(".sidebar-ul").append("<li class='sub-li sb-e-"+e+"'><a href='#i-scroll-"+e+"' class='sub-a'>"+elems[e].innerHTML.replace(/<[^>]*>/g, "")+"</a></li>");
				}
				last_h2=e;
				h2=h2+1;
			}
		}else if (elems[e].localName === 'h2'){
			if(elems[e].innerHTML != "" && elems[e].innerHTML != "&nbsp;"){
				elems[e].setAttribute('id', 'i-scroll-'+e);
			}
		}
	}

	var scrollLink = jQuery('.sidebar-ul li a');
	scrollLink.click(function(e) {
		e.preventDefault();
		jQuery('body,html').animate({
			scrollTop: jQuery(this.hash).offset().top
		}, 1000 );
	});
	jQuery(window).scroll(function() {
		var scrollbarLocation = jQuery(this).scrollTop();
		scrollLink.each(function() {
			var sectionOffset = jQuery(this.hash).offset().top - 80;
			if ( sectionOffset <= scrollbarLocation ) {
				jQuery(this).parent().addClass('active');
				jQuery(this).parent().siblings().removeClass('active');
			}
		});
	});
});
