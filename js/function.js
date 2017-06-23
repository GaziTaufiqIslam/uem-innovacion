particlesJS.load('particles-js',
'https://raw.githubusercontent.com/GaziTaufiqIslam/Assests-for-codepen/master/particles.json',
 function() {
  console.log('callback - particles.js config loaded');
});

$(window).on('load', function() {
  $('body').addClass('loaded');
});
$(document).ready(function() {
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    var winH = $(window).height();

    if(wScroll > 80) {

      //$('.navbar').addClass('show');
$('.navbar').removeClass('hiddenNav');
    }
    else {

      //$('.navbar').removeClass('show');
      $('.navbar').addClass('hiddenNav');
    }

    if(wScroll > 20) {

      //$('.navbar').addClass('show');
    $('.navbar').removeClass('thick');
    }
    else {

      //$('.navbar').removeClass('show');
      $('.navbar').addClass('thick');
    }

    if(wScroll > $('#about').offset().top-($(window).height())){
      $('#about').css({'background-position': (-200-(wScroll-($('#about').offset().top)*1.25)/7)+'px'})

    }
  });

  $(".navbar-toggle").on("click", function() {
      $(".navbar-collapse").css({"background":"#323232"});

    });

//new code
$(".navbar-collapse li a").on('click', function() {
  $(".navbar-collapse").collapse('hide');
});

});


//Pure javascript
var container = document.querySelector( '#loader' );
var palette = [ 'crimson', 'gold', 'slateblue', 'turquoise']
var paletteIndex = 0;

setInterval( function() {

  // Reset spans rotation without transitions
  container.className = 'no-transition';

  // Debounce change to allow for css changes
  setTimeout( function() {
    container.style.color = palette[paletteIndex];
    container.className = 'transition';
    paletteIndex += 1;
    paletteIndex %= palette.length;
  }, 10 );


}, 2500 );
