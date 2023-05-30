// Timer start
function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}
function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.js-days');
	var hoursSpan = clock.querySelector('.js-hours');
	var minutesSpan = clock.querySelector('.js-minutes');
	var secondsSpan = clock.querySelector('.js-seconds');

	function updateClock() {
		var t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}
var deadline = "August 5 2023 13:00:00 GMT+0300"
initializeClock('js-timer', deadline);
// Timer end


//Animation start
$(window).on('scroll', function () {

	$('.invitation').each(function () {
		let posBlock = $(this).offset().top;
		let posWindow = $(window).scrollTop();
		if (posBlock < posWindow + 500) {
			$('.invitation__image').addClass('animate__fadeInUp');
			$('.invitation__h2').addClass('animate__fadeInUp');
			$('.invitation__text').addClass('animate__fadeInUp');
			$('.invitation__info').addClass('animate__fadeInUp');
		}
	});

	$('.names').each(function () {
		let posBlock = $(this).offset().top;
		let posWindow = $(window).scrollTop();
		if (posBlock < posWindow + 350) {
			$('.names__bg').removeClass('animate__animated');
			$('.names__h2').addClass('animate__fadeInUp');
			$('.names__item').addClass('animate__fadeInUp');
		}
	});

	$('.shedule').each(function () {
		let posBlock = $(this).offset().top;
		let posWindow = $(window).scrollTop();
		if (posBlock < posWindow + 450) {
			$('.shedule__h2').addClass('animate__fadeInUp');
			$('.shedule__subtitle').addClass('animate__fadeInUp');
			$('.shedule__timeline').addClass('animate__fadeInUp');
			$('.shedule__item').addClass('animate__fadeInUp');
		}
	});

	$('.gifts').each(function () {
		let posBlock = $(this).offset().top;
		let posWindow = $(window).scrollTop();
		if (posBlock < posWindow + 400) {
			$('.gifts__image').addClass('animate__fadeInUp');
			$('.gifts__h2').addClass('animate__fadeInUp');
			$('.gifts__text').addClass('animate__fadeInUp');
		}
	});

	$('.dress-code').each(function () {
		let posBlock = $(this).offset().top;
		let posWindow = $(window).scrollTop();
		if (posBlock < posWindow + 400) {
			$('.dress-code__h2').addClass('animate__fadeInUp');
			$('.dress-code__text').addClass('animate__fadeInUp');
			$('.dress-code__colors').addClass('animate__fadeInUp');
		}
	});

	$('.footer').each(function () {
		let posBlock = $(this).offset().top;
		let posWindow = $(window).scrollTop();
		if (posBlock < posWindow + 550) {
			$('.footer').addClass('animate__fadeInUp');
			$('.footer__h2').addClass('animate__fadeInUp');
			$('.footer__text').addClass('animate__fadeInUp');
			$('.footer__image').addClass('animate__fadeInUp');
		}
	});
});
//Animation end


//Animation link start
$('.header__link, .mainscreen__scroll').click(function (e) {
	let href = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 500,
	});
	return false;
});
//Animation link end

