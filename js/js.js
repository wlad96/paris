(function () {
    $('.burgerMenu__btn').on('click', function () {
      $('.bar').toggleClass('animate');
      var mobileNav = $('.mobile-nav');
      mobileNav.toggleClass('hide show');
    })
  })();

  AOS.init({
    once: true
  })