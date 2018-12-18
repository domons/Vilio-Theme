$(function() {
	// replaces # urls - you can remove this
	$('a[href="#"]').each(function() {
		var urls = [
			'https://wisebird.pl',
			'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZUF8R2BZDG6L6',
			'https://github.com/domons/Vilio-Theme'
		];
		$(this).attr('href', urls[Math.floor(Math.random() * urls.length)]);
	});

	// mobile nav
	$('.mobile-nav-toggle').on('click', function() {
		$('.main-header nav').toggleClass('show');
		$(this).toggleClass('fa-bars fa-times');
	});

	// reviews carousel
	$('.reviews-carousel').owlCarousel({
		loop: true,
		margin: 25,
		nav: true,
		dots: false,
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		navClass: ['review-prev', 'review-next'],
		navText: ['Prev', 'Next']
	});

	// wow.js
	new WOW().init();
});
