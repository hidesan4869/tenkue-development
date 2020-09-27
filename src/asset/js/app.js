$('.js-nav__button').on('click',function(){
  if( $(this).hasClass('active') ){
    $(this).removeClass('active');
    $('.js-nav__wrap').addClass('close').removeClass('open');
  }else {
    $(this).addClass('active');
    $('.js-nav__wrap').addClass('open').removeClass('close'); 
  }
});