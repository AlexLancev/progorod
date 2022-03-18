$(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger,.nav__list-device').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });
