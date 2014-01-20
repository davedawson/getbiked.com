// $(".price input[type=text]").numeric();

$('.more-photos-wrap').hide();
$('.more-photos a').click(function(){
    $('.more-photos-wrap').slideDown('fast');
    return false;

});

$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        useCSS: true,
        touch: true,
        slideshow: true,
        controlNav: false
      });
});

jQuery(document).ready(function() {
    $(".menu").click(function() {
      $( ".nav-wrap" ).slideToggle( "fast", function() {
        // Animation complete.
        $('.menu').toggleClass('open');
      });
    });
  enquire.register("screen and (min-width:972px)", function() {

    //execute some code for large-screen devices
    // gb.activeNav();
    $('.nav-wrap').show();
    $('.nav-wrap').removeClass('small');


    console.log('wide');

  }, true);
  enquire.register("screen and (max-width:971px)", function() {

    //execute some code for small-screen devices
    $('.nav-wrap').addClass('small');
    $('.nav-wrap').hide();
    $('.menu').removeClass('close');

    console.log('small');

  }, true);

});