document.addEventListener('DOMContentLoaded', () => {
	anime({
		targets: '.content-wrapper h1',
		translateX: [-400, 0],
		easing: 'easeOutExpo',
		duration: 1500,
		delay: 1000,
		opacity: [0, 1],
	})

	anime({
		targets: 'p',
		translateY: [50, 0],
		easing: 'easeOutExpo',
		duration: 1500,
		delay: (el, i) => {
			return 1000 + 100 * i;
		},
		opacity: [0, 1],
	})

	anime({
		targets: 'nav a',
		translateY: [-50, 0],
		easing: 'easeOutExpo',
		duration: 1500,
		delay: (el, i) => {
			return 1500 + 100 * i;
		},
		opacity: [0, 1],
	})

	anime({
		targets: '.logo',
		translateX: [-200, 0],
		easing: 'easeOutExpo',
		duration: 1500,
		delay: (el, i) => {
			return 1000 + 100 * i;
		},
		opacity: [0, 1],
	})


	anime({
		targets: '.left',
		easing: 'easeOutExpo',
		duration: 4000,
		opacity: [0, 1],
	})
	
	// MOBILE NAV
	let hamburger = document.querySelector('.hamburger');
	let mobileNav = document.querySelector('.mobile-nav');

	hamburger.addEventListener('click', () => {
		mobileNav.classList.toggle('show-mobile-nav');
	})
})
