$('.header__slider').slick({
	infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="../../images/header/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="../../images/header/arrow-right.svg" alt=""></img>',
    asNavFor: '.slider-dotshead',
});

$('.slider-dotshead').slick({
	asNavFor: '.header__slider',
	arrows: false,
	slidesToShow: 4,
	slidesToScroll: 4,
});

$('.surf-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-map',
	arrows: false,
	swipe: false,
	responsive: [
	{
		breakpoint: 1210,
		settings: {
			slidesToShow: 3,
		}
	},
	{
		breakpoint: 1103,
		settings: {
			slidesToShow: 3,
			arrows: true,
			prevArrow: '<img class="surf-slider-arrows surf-slider-arrows__left" src="../../images/header/arrow-left.svg" alt=""></img>',
    		nextArrow: '<img class="surf-slider-arrows surf-slider-arrows__right" src="../../images/header/arrow-right.svg" alt=""></img>',
		}
	},
	{
		breakpoint: 880,
		settings: {
			slidesToShow: 2,
			arrows: true,
			prevArrow: '<img class="surf-slider-arrows surf-slider-arrows__left" src="../../images/header/arrow-left.svg" alt=""></img>',
    		nextArrow: '<img class="surf-slider-arrows surf-slider-arrows__right" src="../../images/header/arrow-right.svg" alt=""></img>',
		}
	},
	{
		breakpoint: 590,
		settings: {
			slidesToShow: 1,
			centerMode: true,
			arrows: true,
			swipe: true,
			prevArrow: '<img class="surf-slider-arrows surf-slider-arrows__left" src="../../images/header/arrow-left.svg" alt=""></img>',
    		nextArrow: '<img class="surf-slider-arrows surf-slider-arrows__right" src="../../images/header/arrow-right.svg" alt=""></img>',
		}
	},
	]
});

$('.slider-map').slick({
	slidesToShow: 8,
	slidesToScroll: 1,
	asNavFor: '.surf-slider',
	focusOnSelect: true,
	responsive: [
	{
		breakpoint: 1103,
		settings: {
			slidesToShow: 3,
			arrows: false
		}
	},
	{
		breakpoint: 880,
		settings: {
			slidesToShow: 2,
			arrows: false
		}
	},
	{
		breakpoint: 590,
		settings: {
			slidesToShow: 1,
			centerMode: true,
			arrows: false
		}
	},
	]
});

$('.holder__slider').slick({
	infinite: true,
    fade: true,
    speed: 1500,
    prevArrow: '<img class="slider-holder-arrows slider-holder-arrows__left" src="../../images/header/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-holder-arrows slider-holder-arrows__right" src="../../images/header/arrow-right.svg" alt=""></img>',
});

$('.shop-slider').slick({
	infinite: true,
    fade: false,
    speed: 1500,
    prevArrow: '<img class="shop-slider-arrows shop-slider-arrows__left" src="../../images/header/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="shop-slider-arrows shop-slider-arrows__right" src="../../images/header/arrow-right.svg" alt=""></img>',
});