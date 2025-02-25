// Register the plugins

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.set(".main-bg-img", { scale: 1.2, filter: "blur(50px)" });
gsap.set(".rhu-Branch-1", { left: "-15%", });


// main background image js start
gsap.from(".main-bg-img",{
	opacity:0,
	duration: 5,
})
gsap.to(".main-bg-img",{
	opacity:1,
	duration: 5,
})
// scrollTrigger
gsap.to(".main-bg-img",{
	scale: 1, 
	filter: "blur(0px)",
	scrollTrigger: {
		trigger: ".rhu-sect-2",
     start: "top bottom", // When the top of the section reaches the top of the viewport
     end: "top -100", 
     scrub: 1
 }, 
})
// main background image js end

// section 1 js start
// logo background shape img js start
// gsap.from(".rhu-logo-bg", { 
// 	opacity: 1, 
// 	rotation: -360,
// 	scale: 8,
// 	duration: 5,
// });
// gsap.to(".rhu-logo-bg", { 
// 	opacity: 1, 
// 	rotation: 0,
// 	scale:1,
// 	duration: 5,
// });
// scrollTrigger
// gsap.to(".rhu-logo-bg",{
// 	opacity:0,
// 	rotation:90,
// 	scrollTrigger: {
// 	trigger: ".rhu-sect-2",
//     start: "top bottom", // When the top of the section reaches the top of the viewport
//     end: "top -100", 
//     scrub: 1
// }, 
// })
// logo background shape img js end

// logo image js start
gsap.from(".rhu-logo-img", { opacity: 0, duration: 5, delay:3 });
// gsap.to(".rhu-logo-img", { 
// 	opacity: 1, 
// 	duration: 5,
// 	delay:3
// });
// scrollTrigger
// gsap.to(".rhu-logo-img",{
// 	opacity:0,
// 	rotation:90,
// 	scrollTrigger: {
// 	trigger: ".rhu-sect-2",
//     start: "top bottom", // When the top of the section reaches the top of the viewport
//     end: "top -100", 
//     scrub: 1
// }, 
// })
// logo image js end
// section 1 js end 

//  left & right Branch  js start
gsap.to(".rhu-Branch-1", { opacity: 1, duration: 5, });
gsap.to(".rhu-Branch-2", { opacity: 1, duration: 5, });

// scrollTrigger
gsap.to(".rhu-Branch-1",{
	left: "-40%",
	scale:0.6,
	scrollTrigger: {
		trigger: ".rhu-sect-2",
		scrub: 1,
	}, 
	bottom:"10%"
})
gsap.to(".rhu-Branch-2",{
	right: "-30%",
	bottom:"30%",
	scale:0.7,
	transform: "translate(0, 0)", 
	scrollTrigger: {
		trigger: ".rhu-sect-2",
		scrub: 1
	}, 
})
//  left & right Branch js end

// menu toggle scrollTrigger js start
gsap.to(".rhu-menu",{
	opacity:1,
	scrollTrigger: {
		trigger: ".rhu-sect-2",
		scrub: 1
	}, 
})
// menu toggle js end

// section 3 js start

gsap.fromTo(
	".pomegranate-1RHU-img", // Target element
	{
		bottom: "32%",
		left: "5%",
		opacity: 0,    // Initial opacity
	},
	{
		opacity:1,
	    bottom: "22.0792%",
		scrollTrigger: {
			trigger: ".rhu-sect-3", // Trigger element
			start: "top 80%",       // Start animation when the top of the trigger is 80% down the viewport
			end: "top 20%",         // End animation when the top of the trigger is 20% down the viewport
			scrub: 1,               // Smoothly scrub through the animation on scroll
		},
	}
);

gsap.fromTo(
	".guava-FullRHU-img", // Target element
	{
		bottom: "32%",
		opacity: 0,    // Initial opacity
	},
	{
		opacity:1,
	    bottom: "22.0792%",
		scrollTrigger: {
			trigger: ".rhu-sect-3", // Trigger element
			start: "top 80%",       // Start animation when the top of the trigger is 80% down the viewport
			end: "top 20%",         // End animation when the top of the trigger is 20% down the viewport
			scrub: 1,               // Smoothly scrub through the animation on scroll
		},
	}
);

gsap.fromTo(
	".full-MangoRHU-img", // Target element
	{
		bottom: "32%",
		opacity: 0,    // Initial opacity
	},
	{
		opacity:1,
	    bottom: "16%",
		scrollTrigger: {
			trigger: ".rhu-sect-3", // Trigger element
			start: "top 80%",       // Start animation when the top of the trigger is 80% down the viewport
			end: "top 20%",         // End animation when the top of the trigger is 20% down the viewport
			scrub: 1,               // Smoothly scrub through the animation on scroll
		},
	}
);
gsap.fromTo(
	".apple-red-fullRHU-img", // Target element
	{
		opacity: 0,
		bottom: "54%",    // Initial opacity
	},
	{
		opacity:1,
		bottom: "38.0793%",
		scrollTrigger: {
			trigger: ".rhu-sect-3", // Trigger element
			start: "top 80%",       // Start animation when the top of the trigger is 80% down the viewport
			end: "top 20%",         // End animation when the top of the trigger is 20% down the viewport
			scrub: 1,               // Smoothly scrub through the animation on scroll
		},
	}
);

gsap.fromTo(
	".seabuckthorn-single-1RHU-img", // Target element
	{
		opacity: 0,
		bottom: "65%"   // Initial opacity
	},
	{
		opacity:1,
		bottom: "54%",
		scrollTrigger: {
			trigger: ".rhu-sect-3", // Trigger element
			start: "top 80%",       // Start animation when the top of the trigger is 80% down the viewport
			end: "top 20%",         // End animation when the top of the trigger is 20% down the viewport
			scrub: 1,               // Smoothly scrub through the animation on scroll
		},
	}
);

gsap.fromTo(
	".seabuckthorn-single-2RHU-img", // Target element
	{
		opacity: 0,
		bottom: "67%",    // Initial opacity
	},
	{
		opacity:1,
		bottom: "56%",
		scrollTrigger: {
			trigger: ".rhu-sect-3", // Trigger element
			start: "top 80%",       // Start animation when the top of the trigger is 80% down the viewport
			end: "top 20%",         // End animation when the top of the trigger is 20% down the viewport
			scrub: 1,               // Smoothly scrub through the animation on scroll
		},
	}
);
// section 3 js end

// section 4 js start
gsap.fromTo(
	".full-MangoRHU-img", // Target element
	{
		// Starting state
		bottom: "16%", // Initial position (from section 3)
		scale: 1,      // Initial scale
	},
	{
		// Ending state
		bottom: "-3%",  // Final position
		left:"39%",
		rotation:20,
		scale: 0.3,    // Final scale
		scrollTrigger: {
			trigger: ".rhu-sect-4", // Trigger element
			start: "top 80%",       // Start animation when the top of the trigger is 80% down the viewport
			end: "top 20%",         // End animation when the top of the trigger is 20% down the viewport
			scrub: 1,               // Smoothly scrub through the animation on scroll
		},
	}
);
gsap.fromTo(
	".pomegranate-1RHU-img", // Target element
	{
		bottom: "22.0792%",
		scale: 1,
	},
	{
		opacity:1,
	    bottom: "2%",
		scale: 0.45, 
		scrollTrigger: {
			trigger: ".rhu-sect-4", // Trigger element
			start: "top 80%",       // Start animation when the top of the trigger is 80% down the viewport
			end: "top 20%",         // End animation when the top of the trigger is 20% down the viewport
			scrub: 1,               // Smoothly scrub through the animation on scroll
		},
	}
);
gsap.fromTo(
	".guava-FullRHU-img", // Target element
	{
		bottom: "22.0792%",
		scale: 1,
	},
	{
		opacity:1,
	    bottom: "0%",
		scale: 0.45, 
		scrollTrigger: {
			trigger: ".rhu-sect-4", // Trigger element
			start: "top 80%",       // Start animation when the top of the trigger is 80% down the viewport
			end: "top 20%",         // End animation when the top of the trigger is 20% down the viewport
			scrub: 1,               // Smoothly scrub through the animation on scroll
		},
	}
);
gsap.fromTo(
	".apple-red-fullRHU-img", // Target element
	{
		bottom: "38.0793%",
		scale: 1,
	},
	{
		opacity:1,
		bottom: "0%",
		scale: 0.45, 
		scrollTrigger: {
			trigger: ".rhu-sect-4", // Trigger element
			start: "top 80%",       // Start animation when the top of the trigger is 80% down the viewport
			end: "top 20%",         // End animation when the top of the trigger is 20% down the viewport
			scrub: 1,               // Smoothly scrub through the animation on scroll
		},
	}
);
gsap.fromTo(
	".seabuckthorn-single-1RHU-img", // Target element
	{
		scale: 1,
		bottom: "54%",  // Initial opacity
	},
	{
		opacity:1,
		bottom: "5%",
		scale: 0.45, 
		scrollTrigger: {
			trigger: ".rhu-sect-4", // Trigger element
			start: "top 80%",       // Start animation when the top of the trigger is 80% down the viewport
			end: "top 20%",         // End animation when the top of the trigger is 20% down the viewport
			scrub: 1,               // Smoothly scrub through the animation on scroll
		},
	}
);

gsap.fromTo(
	".seabuckthorn-single-2RHU-img", // Target element
	{
		scale: 1,
		bottom: "56%",  // Initial opacity
	},
	{
		opacity:1,
		bottom: "5%",
		scale: 0.45, 
		scrollTrigger: {
			trigger: ".rhu-sect-4", // Trigger element
			start: "top 80%",       // Start animation when the top of the trigger is 80% down the viewport
			end: "top 20%",         // End animation when the top of the trigger is 20% down the viewport
			scrub: 1,               // Smoothly scrub through the animation on scroll
		},
	}
);


// Function to animate elements with random starting positions
function animateElements(selector) {
	// Generate random x and y offsets
	const randomX = gsap.utils.random(-100, 100); // Call the function to get a random number
	const randomY = gsap.utils.random(-100, 100); // Call the function to get a random number

	// Log the selector and random values for debugging
	console.log(`Animating: ${selector}, x: ${randomX}%, y: ${randomY}%`);

	gsap.fromTo(
		selector,
		{
			x: randomX + "%", // Random horizontal starting position
			y: randomY + "%", // Random vertical starting position
			opacity: 0, // Start with opacity 0
		},
		{
			x: 0, // Move to the final horizontal position
			y: 0, // Move to the final vertical position
			opacity: 1, // Fade in
			ease: "power2.out", // Smooth easing
			scrollTrigger: {
				trigger: ".rhu-sect-4", // Trigger element
				start: "top 80%", // Start animation when the top of .rhu-sect-4 is 80% down the viewport
				end: "top 20%", // End animation when the top of .rhu-sect-4 is 20% down the viewport
				scrub: 1, // Smoothly scrub through the animation on scroll
				markers: true, // Add markers for debugging (remove in production)
			},
		}
	);
}
// Animate all elements
animateElements(".apple-red-full-1");
animateElements(".apple-red-full");
animateElements(".apple-red-fullrhu");
animateElements(".full-mango");
animateElements(".full-mango-1");
animateElements(".full-mango-2");
animateElements(".full-mango-3");
animateElements(".full-mango-4");
animateElements(".full-mangorhu");
animateElements(".guava-fullrhu");
animateElements(".guava-full");
animateElements(".guava-full-1");
animateElements(".leaf-1");
animateElements(".leaf-1rhu");
animateElements(".leaf-4");
animateElements(".leaf-4-1");
animateElements(".leaf-4-2");
animateElements(".leaf-4-3");
animateElements(".leaf-4-4");
animateElements(".leaf-4-5");
animateElements(".leaf-4-6");
animateElements(".leaf-4-7");
animateElements(".leaf-4-8");
animateElements(".leaf-4-9");
animateElements(".leaf-4-10");
animateElements(".pomegranate-1rhu");
animateElements(".pomegranate-1");
animateElements(".seabuckthorn-single-1-1");
animateElements(".seabuckthorn-single-1rhu");
animateElements(".seabuckthorn-single-1");
animateElements(".seabuckthorn-single-2rhu");
// section 4 js end


