$(document).ready(function() {

  $('.my-slick').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    speed: 1000
  });




  var menu = $('.slide-menu');
  var anywhere = $('.wraper');

  // click on body to close menu
  anywhere.click( function(e) {
    if( menu.hasClass('menu-open') ){
      e.preventDefault();
      menu.toggleClass('menu-open' );
    }
  });

  // click menu switch
  menu.click(function(e) {
    e.preventDefault();
    menu.toggleClass('menu-open' );
  });

});