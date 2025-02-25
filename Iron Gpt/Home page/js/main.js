$(document).ready(function () {

	/* menu js start*/
	$("#h-toggle-btn, .m-overlay-bg").click(function (e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".h-toggle-btn").toggleClass("open");
		$("#h-sidebar-wrapper").toggleClass("h-menu-active");
		$(".m-overlay-bg").toggleClass('h-bg-active');
		$('body').toggleClass('open-nav');
	});
	/* menu js end*/


	//  owl hig-web-based slider
	$('.owl-web-based').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		items: 1,
		dots: true,
		navText: [
			"<i class='fa-solid fa-chevron-right'></i>",
			"<i class='fa-solid fa-chevron-left'></i>"

		],

	})

	//  owl-most-important-features
	$('.owl-most-important-features').owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: true,

		dots: false,
		navText: [
			"<i class='fa-solid fa-chevron-right'></i>",
			"<i class='fa-solid fa-chevron-left'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			800: {
				items: 2.2,
				center: true,
			},
			1200: {
				items: 3.9,
				center: true,
			}
		}
	})



	$('.hig-faq-tab-a').click(function () {
		$(".hig-faq-tab").removeClass('hig-faq-tab-active');
		$(".hig-faq-tab[data-id='" + $(this).attr('data-id') + "']").addClass("hig-faq-tab-active");
		$(".hig-faq-tab-a").removeClass('hig-faq-active-a');
		$(this).parent().find(".hig-faq-tab-a").addClass('hig-faq-active-a');

	});


		ScrollReveal({ 
			reset: true, 
			distance:'80px',
			duration:2000,
			delay:200
		});
	
		ScrollReveal().reveal('.fade-left',{origin:'left'});
		ScrollReveal().reveal('.fade-right',{origin:'right'});
		ScrollReveal().reveal('.fade-top',{origin:'top'});
		ScrollReveal().reveal('.fade-bottom',{origin:'bottom'});


		ScrollReveal().reveal('.hig-border', {interval: 300, delay: 100 ,origin:'top'});
		ScrollReveal().reveal('.btn-left', {interval: 300, delay: 100 ,origin:'left'});
		ScrollReveal().reveal('.hig-text', {interval: 100, delay: 100 ,origin:'in'});
		ScrollReveal().reveal(".fade-in", { duration: 2000, move: 0 ,origin:'left' });
		ScrollReveal().reveal(".fade-in-up", { duration: 1000, move: 0 });
		ScrollReveal().reveal(".fade-in-time", { duration: 3000, move: 0 });


})

document.addEventListener('DOMContentLoaded', function () {
	var textWrappers = document.querySelectorAll('.ml2');

	textWrappers.forEach(function (textWrapper) {

	  var lines = textWrapper.textContent.split('\n');

	  textWrapper.innerHTML = '';


	  lines.forEach(function (line, lineIndex) {

		var lineDiv = document.createElement('div');
		lineDiv.className = 'line';

		textWrapper.appendChild(lineDiv);

		lineDiv.innerHTML = line.replace(/\S/g, "<span class='letter'>$&</span>");
		anime.timeline({ loop: false, autoplay: true })
		  .add({
			targets: '.ml2 .line:nth-child(' + (lineIndex + 1) + ') .letter',
			scale: [6, 1],
			opacity: [0, 1],
			translateZ: 0,
			easing: "easeOutExpo",
			duration: 600,
			delay: (el, i) => 70 * i
		  }).add({
			targets: '.ml2 .line:nth-child(' + (lineIndex + 1) + ')',
			opacity: 1,
			duration: 600,
			easing: "easeOutExpo",
			delay: 600
		  });
	  });
	});
  });
