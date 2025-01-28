$(function() {
	// console.log('Script loaded!'); // <--- Add this
	function getRandomAngle(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function getRandomPosition(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$(window).scroll(function() {
		// console.log('Scrolling...'); // <--- Add this

		if ( $(this).scrollTop()>=$('.section01').innerHeight()/3 ) {
			$('.scrolltop-btn').fadeIn(200);
			$('.scrolltop-btn .st_bottom').removeAttr('style'); 
		} else {
			$('.scrolltop-btn').fadeOut(200);
		}
		var docH = $(document).height();
		var winH = $(window).height();
		if (window.matchMedia('(max-width: 600px)').matches) {
			var bpx = 30;
		} else {
			var bpx = 50;
		}
		var targetH = docH - $('#footer').outerHeight() + $('#footer .image-area').outerHeight() + bpx;
		if ( winH+$(this).scrollTop()>=targetH ) {
			// $('.scrolltop-btn').addClass('bottomed');
		} else {
			// $('.scrolltop-btn').removeClass('bottomed');
		}

		// 1) Find the scroll-trigger point for the .x-area container
		var radialPosAbout = $('.x-area').offset().top + $('.x-area').outerHeight() / 3;

		// 2) Check if we’ve scrolled enough to trigger the animation
		// if (winH/6*5 + $(this).scrollTop() >= radialPosAbout) {
		if (winH/6*5 + $(this).scrollTop() >= radialPosAbout) {
			// console.log('Radial triggered!');
			if (!$('.x-area').hasClass('opened')) {
			  $('.x-area').addClass('opened');
			  
		
		// 3) Different positions for mobile vs. desktop
		if (window.matchMedia('(max-width: 750px)').matches) {
			// -- MOBILE POSITIONS --
			setTimeout(function(){
			  const angle = getRandomAngle(35, 50);
			  const pos = getRandomPosition(15, 30);
			  $(".x-area .area-item.radial01").css({
				bottom: `${pos}%`,
				left: '-2%',
				transform: `translate(-50%, -50%) rotate(-${angle}deg)`,
			  });
			  $(".x-area .area-item.radial01 img").css('width','100%');
			},80);
			setTimeout(function(){
			  const angle = getRandomAngle(35, 50);
			  const pos = getRandomPosition(80, 100);
			  $(".x-area .area-item.radial02").css({
				bottom: `${pos}%`,
				left: '100%',
				transform: `translate(-50%, -50%) rotate(${angle}deg)`,
			  });
			  $(".x-area .area-item.radial02 img").css('width','100%');
			},160);
			setTimeout(function(){
			  const angle = getRandomAngle(35, 50);
			  const pos = getRandomPosition(50, 65);
			  $(".x-area .area-item.radial03").css({
				bottom: `${pos}%`,
				left: '-2%',
				transform: `translate(-50%, -50%) rotate(-${angle}deg)`,
			  });
			  $(".x-area .area-item.radial03 img").css('width','100%');
			},240);
			setTimeout(function(){
			  const angle = getRandomAngle(35, 50);
			  const pos = getRandomPosition(15, 30);
			  $(".x-area .area-item.radial04").css({
				bottom: `${pos}%`,
				left: '100%',
				transform: `translate(-50%, -50%) rotate(${angle}deg)`,
			  });
			  $(".x-area .area-item.radial04 img").css('width','100%');
			},320);
			setTimeout(function(){
			  const angle = getRandomAngle(35, 50);
			  const pos = getRandomPosition(80, 100);
			  $(".x-area .area-item.radial05").css({
				bottom: `${pos}%`,
				left: '-2%',
				transform: `translate(-50%, -50%) rotate(-${angle}deg)`,
			  });
			  $(".x-area .area-item.radial05 img").css('width','100%');
			},400);
			setTimeout(function(){
			  const angle = getRandomAngle(35, 50);
			  const pos = getRandomPosition(60, 75);
			  $(".x-area .area-item.radial06").css({
				bottom: `${pos}%`,
				left: '105%',
				transform: `translate(-50%, -50%) rotate(${angle}deg)`,
			  });
			  $(".x-area .area-item.radial06 img").css('width','100%');
			},480);

		  } else {

			// Desktop positions
			setTimeout(function(){
			  const angle = getRandomAngle(15, 90);
			  const pos = getRandomPosition(0, 10);
			  $(".x-area .area-item.radial01").css({left:'calc(50% - 330px)',bottom:`${pos}%`, transform: `translate(-50%, 0) rotate(-${angle}deg)`});
			  $(".x-area .area-item.radial01 img").css('width','100%');
			},80);
			setTimeout(function(){
			  const angle = getRandomAngle(15, 90);
			  const pos = getRandomPosition(60, 80);
			  $(".x-area .area-item.radial02").css({left:'calc(50% + 310px)',bottom:`${pos}%`, transform: `translate(-50%, 0) rotate(${angle}deg)`});
			  $(".x-area .area-item.radial02 img").css('width','100%');
			},160);
			setTimeout(function(){
			  const angle = getRandomAngle(15, 90);
			  const pos = getRandomPosition(30, 45);
			  $(".x-area .area-item.radial03").css({left:'calc(50% - 330px)',bottom:`${pos}%`, transform: `translate(-50%, 0) rotate(-${angle}deg)`});
			  $(".x-area .area-item.radial03 img").css('width','100%');
			},240);
			setTimeout(function(){
			  const angle = getRandomAngle(15, 90);
			  const pos = getRandomPosition(10, 20);
			  $(".x-area .area-item.radial04").css({left:'calc(50% + 310px)',bottom:`${pos}%`, transform: `translate(-50%, 0) rotate(${angle}deg)`});
			  $(".x-area .area-item.radial04 img").css('width','100%');
			},320);
			setTimeout(function(){
			  const angle = getRandomAngle(15, 90);
			  const pos = getRandomPosition(60, 80);
			  $(".x-area .area-item.radial05").css({left:'calc(50% - 310px)',bottom:`${pos}%`, transform: `translate(-50%, 0) rotate(-${angle}deg)`});
			  $(".x-area .area-item.radial05 img").css('width','100%');
			},400);
			setTimeout(function(){
				const angle = getRandomAngle(15, 90);
				const pos = getRandomPosition(30, 45);
				$(".x-area .area-item.radial06").css({left:'calc(50% + 350px)',bottom:`${pos}%`, transform: `translate(-50%, 0) rotate(${angle}deg)`});
				$(".x-area .area-item.radial06 img").css('width','100%');
			  },480);
		  }
		} // closes if (!$('.x-area').hasClass('opened'))
	  } // closes if (winH/6*5 + $(this).scrollTop() > 100)

		var imagePos = docH - $('#footer').outerHeight()/2 - winH;
		// if ( winH/3*2+$(this).scrollTop()>=imagePos ) {
		if ( $(this).scrollTop()>=imagePos ) {
			$('#footer .image-area .illust').addClass('scrolled');
			setTimeout(function(){
				$('#footer .image-area .illust').addClass('slided');
			},2500);
		}
	});

	$('.scrolltop-btn').click(function() {
		// var wst = $(window).scrollTop() + $(window).height() - $('.st_bottom').height() - 50;
		// console.log(wst);
		// $('.scrolltop-btn .st_bottom').fadeOut();
		$('html,body').animate({scrollTop:0},300);
		// $('.scrolltop-btn .st_bottom').removeAttr('style');
	});

	// var winW = $(window).width() / 1000 * 5;
	// $('.section01 .image-area img').css('animation-duration',winW+'s');
	

	if ($('.js-scroll-trigger').length) {
		scrollAnimation();
	}
	function scrollAnimation() {
		$(window).scroll(function () {
			$(".js-scroll-trigger").each(function () {
				let position = $(this).offset().top,
						scroll = $(window).scrollTop(),
						windowHeight = $(window).height();
				if (scroll > position - windowHeight / 6 * 5) {
						$(this).addClass('is-active');
				}
			});
		});
	}
	$(window).trigger('scroll');

	setTimeout(function(){
		$(".section_kv .page-title img").addClass('in');
	},500);
	setTimeout(function(){
		$(".section_kv .image-area img").addClass('in');
	},1500);
});

$(window).on('load', function () {
	var style = '<link rel="stylesheet" href="./animation.css">';
	$('head link:last').after(style);
});