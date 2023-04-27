// search active
$('.search input').focus(function () {
  $(this).parent().addClass('active');
});
// search disactive
$('.search input').blur(function () {
  if ($(this).val().length == 0) {
    $(this).parent().removeClass('active');
  }
});
// open mobile menu
$('.header__burger-menu').on('click', function () {
  $('.mobile-menu, .mobile-bcg').addClass('active');
  $('body').css('overflow', 'hidden');
})
// close mobile menu
$('.mobile-menu__close, .mobile-bcg').on('click', function () {
  $('.mobile-menu').addClass('disActive');
  $('.mobile-bcg').removeClass('active');
  $('body').css('overflow', 'auto');

  setTimeout(() => {
    $('.mobile-menu, .mobile-bcg').removeClass('active disActive');
  }, 600);
})
// slider dots position
$(document).ready(function () {
  const sliderPadding = window.innerWidth > 855 ? 48 : 24;
  const mainSliderDots = $('.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal');
  const dotPosition = ($('.slider__item-text').width() + sliderPadding - mainSliderDots.width()) / 2;

  mainSliderDots.css('right', `${dotPosition}px`)
});

$('.mobile-menu__navigation').on('click', '.mobile-menu__main-menu', function () {
  const el = $(this).find('.mobile-menu__link-wrap');
  const hasClass = el.hasClass('active');

  if (hasClass) {
    el.removeClass('active');
  } else {
    el.addClass('active');
  }
  console.log(hasClass);
  $(this).find('.mobile-menu__sub-menu').slideToggle();
})
