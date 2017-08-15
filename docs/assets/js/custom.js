$(document).ready(function() {

	$('.scrollspy').scrollSpy({
		scrollOffset: 0
	});

	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event) {
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 10);

	function hasScrolled() {
		var st = $(this).scrollTop();

		if (Math.abs(lastScrollTop - st) <= delta)
			return;

		if (st > lastScrollTop && st > navbarHeight) {
			// Scroll Down
			$('header').removeClass('nav-down').addClass('nav-up');
		} else {
			// Scroll Up
			if (st + $(window).height() < $(document).height()) {
				$('header').removeClass('nav-up').addClass('nav-down');
			}
		}

		lastScrollTop = st;
	};

	// Preloader
	var preloader = $('.preloader');
	$(window).load(function() {
		preloader.remove();
	});

	// Collapse button
	$(".button-collapse").sideNav();

	// Slider

	$('.slider').slider({
		full_width: true
	});

	// Parallax

	var slideHeight = $(window).height();
	$('.full-screen').css('height', slideHeight);
	$(window).resize(function() {
		$('.full-screen').css('height', slideHeight);
	});

	// Navbar-Collapse (when scrolling)

	$(window).scroll(function() {
		if ($("header").offset().top > 50) {
			$("nav").addClass("top-nav-collapse");
		} else {
			$("nav").removeClass("top-nav-collapse");
		}
	});

	// Collapsible

	$('.collapsible').collapsible({
		accordion: false
	});

});
