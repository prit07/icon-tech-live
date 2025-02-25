$(document).ready(function(){
	/* menu js start*/
	$("#h-toggle-btn, .m-overlay-bg").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".h-toggle-btn").toggleClass("open");
		$("#h-sidebar-wrapper").toggleClass("h-menu-active");
		$(".m-overlay-bg").toggleClass('h-bg-active');
		$('body').toggleClass('open-nav');
	});
	 /* menu js end*/

	// search js
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.h-home-wapper').addClass('moblie-search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.h-home-wapper').removeClass('moblie-search-active');
		});
	};

})


// var acc = document.getElementsByClassName("accordion-categories-header");
// var i;

// for (i = 0; i < acc.length; i++) {
// 	acc[i].addEventListener("click", function () {
// 		this.classList.toggle("active");
// 		var panel = this.nextElementSibling;
// 		if (panel.style.display === "block") {
// 			panel.style.display = "none";
// 		} else {
// 			panel.style.display = "block";
// 		}
// 	});
// }

// if ($(window).width() < 991) {
//     var acc = document.getElementsByClassName("accordion-categories-header");
//     var i;

//     for (i = 0; i < acc.length; i++) {
//         acc[i].addEventListener("click", function () {
//             this.classList.toggle("active");
//             var panel = this.nextElementSibling;
//             if (panel.style.display === "block") {
//                 panel.style.display = "none";
//             } else {
//                 panel.style.display = "block";
//             }
//         });
//     }
// }


if ($(window).width() < 991) {
    var acc = document.getElementsByClassName("accordion-categories-header");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}


$(document).ready(function() {
    if ($(window).width() < 991) {
        addAccordionClickFunctionality(); 
    }
});

$(window).resize(function() {
    if ($(window).width() < 991) {
        location.reload(); 
    }
});