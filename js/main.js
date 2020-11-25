
$('.cart__bottom-right .btn').on('click', function(){
  $('.order__inner').addClass('active'),
  $('.cart__bottom-right .btn').hide();

});

$('.arrow1').on('click', function(){
  $('#show1').toggleClass('active');
});
$('.arrow2').on('click', function(){
  $('#show2').toggleClass('active');
});
$('.arrow3').on('click', function(){
  $('#show3').toggleClass('active');
});
// $('.arrow').on('click', function(){
//   $(this).addClass('active').siblings().removeClass('active');
//   });




$('.filter__price-title').on('click', function(){
  $('.range-form').toggleClass('active');
});

$('.btn-menu').on('click', function(){
  $('.mob-menu').toggleClass('active');
});

$('.btn-catalog').on('click', function(){
  $('.mobile-catalog').toggleClass('active');
});

$('.aside__list').on('click', function(){
  $('.aside_top').toggleClass('active');
});



$(function(){
  $('input[type="number"]').niceNumber();

});

$('.slider__container').slick({
  prevArrow:'<button class="slick-prev" type="button"><img src="images/main/arrow-left.png" alt=""></button>',
  nextArrow:'<button class="slick-next" type="button"><img src="images/main/arrow-right.png" alt=""></button>',
  
  responsive: [
    
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.new__container').slick({
  slidesToShow:2,
  slidesToScroll:1,
  prevArrow:'<button class="slick-prev" type="button"><img src="images/main/arrow-white-left.png" alt=""></button>',
  nextArrow:'<button class="slick-next" type="button"><img src="images/main/arrow-white-right.png" alt=""></button>',
  centerMode: true,
  loop: true,
  responsive: [
    
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true
      }
    }
  ]
});



$('.hit__container').slick({
  slidesToShow:4,
  slidesToScroll:1,
  prevArrow:'<button class="slick-prev" type="button"><img src="images/main/arrow-left.png" alt=""></button>',
  nextArrow:'<button class="slick-next" type="button"><img src="images/main/arrow-right.png" alt=""></button>',
  responsive: [
    
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true
      }
    }
  ]
});

$('.reviwes__container').slick({
  slidesToShow:1,
  prevArrow:'<button class="slick-prev" type="button"><img src="images/main/arrow-left.png" alt=""></button>',
  nextArrow:'<button class="slick-next" type="button"><img src="images/main/arrow-right.png" alt=""></button>'
});

$('.clients__container').slick({
  slidesToShow:2,
  prevArrow:'<button class="slick-prev" type="button"><img src="images/main/arrow-left.png" alt=""></button>',
  nextArrow:'<button class="slick-next" type="button"><img src="images/main/arrow-right.png" alt=""></button>',
  responsive: [
    
    
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      }
    }
  ]
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




