
$('.cart__bottom-right .btn').on('click', function(){
  $('.order__inner').addClass('active'),
  $('.cart__bottom-right .btn').hide();

});

$('.arrow').on('click', function(){
  $('.info-add-name').toggleClass('active'),
  $('.row__info-total').toggleClass('active'),
  $('.row__info-deliver').toggleClass('active'),
  $('.row__info-add').toggleClass('active');
});


// let num = 0,
//      elements = $(".info-add-name", ".row__info-total", ".row__info-deliver", ".row__info-add");

// $(".arrow").on("click", ( ) => {
//   for(let i = 0; i < elements.length, i++){
//   elements[i].removeClass("active"),
//   elements[ num ].addClass("active"),
//   num++
// }
// }
// })



$('.filter__price-title').on('click', function(){
  $('.range-form').toggleClass('active');
});


$(function(){
  $('input[type="number"]').niceNumber();

});

$('.slider__container').slick({
  prevArrow:'<button class="slick-prev" type="button"><img src="images/main/arrow-left.png" alt=""></button>',
  nextArrow:'<button class="slick-next" type="button"><img src="images/main/arrow-right.png" alt=""></button>'
});

$('.new__container').slick({
  slidesToShow:4,
  slidesToScroll:1,
  prevArrow:'<button class="slick-prev" type="button"><img src="images/main/arrow-white-left.png" alt=""></button>',
  nextArrow:'<button class="slick-next" type="button"><img src="images/main/arrow-white-right.png" alt=""></button>'
});

$('.hit__container').slick({
  slidesToShow:4,
  slidesToScroll:1,
  prevArrow:'<button class="slick-prev" type="button"><img src="images/main/arrow-left.png" alt=""></button>',
  nextArrow:'<button class="slick-next" type="button"><img src="images/main/arrow-right.png" alt=""></button>'
});

$('.reviwes__container').slick({
  slidesToShow:1,
  prevArrow:'<button class="slick-prev" type="button"><img src="images/main/arrow-left.png" alt=""></button>',
  nextArrow:'<button class="slick-next" type="button"><img src="images/main/arrow-right.png" alt=""></button>'
});

$('.clients__container').slick({
  slidesToShow:2,
  prevArrow:'<button class="slick-prev" type="button"><img src="images/main/arrow-left.png" alt=""></button>',
  nextArrow:'<button class="slick-next" type="button"><img src="images/main/arrow-right.png" alt=""></button>'
});


$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
});





$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 0,
  max: 10000,
  from: 0,
  to: 10000,
});




