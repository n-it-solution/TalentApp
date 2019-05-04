jQuery(function($){

// Check mobile
	function is_mobile(){ return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) }

	if( is_mobile() ){
		if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) $('meta[name="viewport"]').prop('content', 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no');
		$('html').addClass('mobile');
	}

// Navigation
	$('#navigation .menu_item a').on('click', function(){

		var href = $(this).attr('href');

		if( href.replace(/#.*/g, '') == '' ){
			$('body, html').stop().animate({ scrollTop: $(href).offset().top }, 600);
			return false
		}

	});

// Top carousel
	$('#top_carousel').fCarousel({
		'centerItem'	:	1,
		'speed'			:	400,
		'separation'	:	550,
		'distance'		:	100,
		'perspective'	:	10,
		'responsive'	:	{
			0		:	{ 'separation' : 60 },
			480		:	{ 'separation' : 180 },
			768		:	{ 'separation' : 550 }
		}
	});

// Example 1
	var carousel1 = $('#example-1');
	carousel1.fCarousel({
		'separation'	:	450,
		'distance'		:	400,
		'opacity'		:	0.5,
		'keyboardNav'	:	false,
		'arrows'		:	true,
		'arrowsClass'	:	['f_arrow','',''],
		'responsive'	:	{
			0		:	{ 'separation' : 100, 'opacity' : 0, 'arrows' : false },
			480		:	{ 'separation' : 200, 'distance' : 500, 'opacity' : 0.2, 'arrows' : true },
			768		:	{ 'separation' : 300, 'opacity' : 0.3 },
			1024	:	{ 'separation' : 450, 'distance' : 400, 'opacity' : 0.5 }
		},
		'onChange'		:	function(carousel){
			carousel.find('.dot').eq( carousel.data('centerItem').index() ).addClass('active').siblings().removeClass('active');
		}
	});


	carousel1.append('<div class="dots"></div>');
	for( var i = 0; i < carousel1.data('items'); i++ ){
		carousel1.children('.dots').append('<a href="#" class="dot" role="button" tabindex="-1"></a>');
	}
	carousel1.find('.dot').eq( carousel1.data('centerItem').index() ).addClass('active');

	// click on dots
	carousel1.find('.dot').on('click', function(){

		if( !$(this).hasClass('active') ){
			var index = $(this).index() + 1;
			carousel1.trigger('jumpTo', index);
		}

		return false

	});

// Example 2
	var callbacksValItems		=	$('#examples .callbacks_info .items'),
		callbacksValCenter		=	$('#examples .callbacks_info .center_item'),
		callbacksValPrevious	=	$('#examples .callbacks_info .previous_item'),
		callbacksValNext		=	$('#examples .callbacks_info .next_item');

	var triggerBefore			=	$('#examples .callbacks_info .trigger.before'),
		triggerOn				=	$('#examples .callbacks_info .trigger.on'),
		triggerAfter			=	$('#examples .callbacks_info .trigger.after'),
		triggerCenter			=	$('#examples .callbacks_info .trigger.center');

	var carousel2 = $('#example-2');
	carousel2.fCarousel({
		'visibleItems'	:	3,
		'separation'	:	100,
		'distance'		:	10,
		'perspective'	:	80,
		'speed'			:	800,
		'arrows'		:	true,
		'arrowsClass'	:	['f_arrow','',''],
		'responsive'	:	{
			0		:	{ 'visibleItems' : 1, 'separation' : 55, 'distance': 100 },
			480		:	{ 'visibleItems' : 2, 'separation' : 60, 'distance': 40 },
			768		:	{ 'separation' : 100, 'distance': 1 },
			1024	:	{ 'visibleItems' : 3 }
		},
		'autoplay'		:	3000,
		'stopOnHover'	:	true,
		'beforeChange'	:	function(carousel, centerItem){

			triggerBefore.addClass('active');
			setTimeout(function(){ triggerBefore.removeClass('active'); }, 150);

		},
		'onChange'		:	function(carousel){

			triggerOn.addClass('active');
			setTimeout(function(){ triggerOn.removeClass('active'); }, 800);

		},
		'afterChange'	:	function(carousel, centerItem){

			triggerAfter.addClass('active');
			setTimeout(function(){ triggerAfter.removeClass('active'); }, 150);

			callbacksValItems.text( carousel.data('items') );
			callbacksValCenter.text( carousel.data('centerItem').index() + 1 );
			callbacksValPrevious.text( carousel.data('prevItem').index() + 1 );
			callbacksValNext.text( carousel.data('nextItem').index() + 1 );

		},
		'clickedCenter'	:	function(carousel, centerItem){

			triggerCenter.addClass('active');
			setTimeout(function(){ triggerCenter.removeClass('active'); }, 150);

		}
	});

	callbacksValItems.text( carousel2.data('items') );
	callbacksValCenter.text( carousel2.data('centerItem').index() + 1 );
	callbacksValPrevious.text( carousel2.data('prevItem').index() + 1 );
	callbacksValNext.text( carousel2.data('nextItem').index() + 1 );

// Example 3
	$('#example-3').fCarousel({
		'centerItem'	:	1,
		'separation'	:	250,
		'orientation'	:	'horizontal',
		'mousewheel'	:	true,
		'autoplay'	:	20000,
		'responsive'	:	{
			0		:	{ 'separation' : 200, 'mousewheel' : false },
			768		:	{ 'mousewheel' : true },
			1024	:	{ 'separation' : 250 }
		}
	});

});