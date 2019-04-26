$(function() {

	$("a.header-calc-btn").click(function() {
	    var elementClick = $(this).attr("href")
	    var destination = $(elementClick).offset().top;
	    jQuery("html:not(:animated),body:not(:animated)").animate({
	      scrollTop: destination
	    }, 800);
	    return false;
	});

	$('.accordion-item .heading').on('click', function(e) {
	    e.preventDefault();

	    // Add the correct active class
	    if($(this).closest('.accordion-item').hasClass('active')) {
	        // Remove active classes
	        $('.accordion-item').removeClass('active');
	    } else {
	        // Remove active classes
	        $('.accordion-item').removeClass('active');

	        // Add the active class
	        $(this).closest('.accordion-item').addClass('active');
	    };

	    if($(this).closest('.accordion-item .heading').hasClass('active')) {
	        // Remove active classes
	        $('.accordion-item .heading').removeClass('active');
	    } else {
	        // Remove active classes
	        $('.accordion-item .heading').removeClass('active');

	        // Add the active class
	        $(this).closest('.accordion-item .heading').addClass('active');
	    };

	    // Show the content
	    var $content = $(this).next();
	    $content.slideToggle(100);
	    $('.accordion-item .content').not($content).slideUp('fast');
	});

	$('.chart').easyPieChart({
     size: 67,
     scaleLength: 0,
     lineWidth: 5,
     trackColor: false,
     barColor: '#3eac00',
     animate: 1000
	});

	var wow = new WOW(
	  {
	    mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
	  }
	);
	wow.init();

	$('img').lazyload({
		effect: "fadeIn"
	});
	$('iframe').lazyload({
		effect: "fadeIn",
	});


	$('.calculator-progress-btn').click(function(e) {
			e.preventDefault();
			$('.stripes').addClass('full');
			$('.stripes span').text('Готово 100%');
			$('.calc-global').addClass('calc-global__active');
			$('.calc-global-next').addClass('calc-global-next__active')
	});


	


});
