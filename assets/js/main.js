$(function () {
  $('.community__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: `<img class="slider-arrows slider-arrows__left" src="assets/images/arrow-prev.svg" alt="arrows">`,
    nextArrow: `<div><img class="slider-arrows slider-arrows__right" src="assets/images/arrow-next.svg" alt="arrows"><div class="community__count"><span id="count">1</span>/5</div></div>`,
    responsive: [
      {
        breakpoint: 1221,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.community__slider').on('afterChange', function(event, slick, currentSlide){
    $("#count").text(currentSlide + 1);
  });

});