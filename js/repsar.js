/* Adaptive menu start */
$('.menu__btn').click(function() {
  let btn = $(this);
  let list = $('.menu__list');
  let body =$('body');

  if (btn.hasClass('menu__btn_open')) {
    btn.removeClass('menu__btn_open');
    list.removeClass('menu__list_open');
    body.removeClass('_stop-scroll');
  } else {
    btn.addClass('menu__btn_open');
    list.addClass('menu__list_open');
    body.addClass('_stop-scroll');
  }
});
/* Adaptive menu end */

/* Action yandex map start */
$('.map__die').click(function() {
  $(this).addClass('map__die_hide');
});
/* Action yandex map end */