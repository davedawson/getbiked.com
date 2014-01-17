// $(".price input[type=text]").numeric();

$('.more-photos-wrap').hide();
$('.more-photos a').click(function(){
    $('.more-photos-wrap').slideDown('fast');
    return false;

});

$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide"
      });
});