particlesJS.load('particles-js',
'https://raw.githubusercontent.com/GaziTaufiqIslam/Assests-for-codepen/master/particles.json',
 function() {
  console.log('callback - particles.js config loaded');
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


});
