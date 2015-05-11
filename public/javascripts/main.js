$(function(){
  $('body').scrollspy({ target: '#bs-example-navbar-collapse-1' })
  $('#bs-example-navbar-collapse-1 a').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });
  // $('[data-spy="scroll"]').each(function () {
  //   console.log(123)
  //   var $spy = $(this).scrollspy('refresh')
  // })
  // $('#bs-example-navbar-collapse-1').on('activate.bs.scrollspy', function () {
  //   console.log(123)
  // do something…
  // })
});