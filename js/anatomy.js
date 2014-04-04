jQuery(document).ready(function() {
  $('.desc').hide();
  $('.diagram li').hide();
  $(".nav a").click(function() {
    clicked = $(this).attr('class');
    $('.desc').hide();
    $(this).next('.desc').fadeIn('fast');
    // $('.desc').fadeIn('fast').removeClass('.hide');
    $('.nav li').removeClass();
    $(this).parent('li').addClass('active')
    $('.desc .top, .diagram li').hide();
    // $('.desc .top.' + clicked).fadeIn('fast');
    $('.diagram .' + clicked).fadeIn('fast');
    return false;
  });
});