equalheight = function(container) {

  var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
  $(container).each(function() {

    $el = $(this);
    $($el).height('auto')
    topPostion = $el.position().top;

    if (currentRowStart != topPostion) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) :
        (currentTallest);
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
}

$(document).ready(function() {


  // //Smooth Scroll from anchor links
  $('.replace-option').on('click', 'a', function(e) {
    e.preventDefault();
    var loc = $(this).attr('rel');
    loc = "#" + loc;
    $('html, body').animate({
      scrollTop: ($(loc).offset().top)
    }, 800);
  });

  //Equal heights amongst box block

  $(window).load(function() {
    equalheight('.row .col .card');

  });

  $(window).resize(function() {
    equalheight('.row .col .card');

  });


  //Slider
  $('.sliderHeader').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    appendArrows: $('.sliderArrows'),
    prevArrow: '<i class="slider-arrow slider-prev"></i>',
    nextArrow: '<i class="slider-arrow slider-next"></i>',
    responsive: [{
      breakpoint: 1024,
    }, {
      breakpoint: 959,
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  if ($(window).width() < 600) {
    $('.sliderHeader').slick('unslick');
  };


  // var slickDots = $('.slick-dots button').clone();
  // $('.text-box').append(slickDots);
  //

});
