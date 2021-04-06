AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;
  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff
    const swiper = new Swiper('.swiper-container', {
      autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
       pagination: {
         el: '.swiper-pagination',
       },
     });
     function lockScroll() {
      if ($('body').hasClass('lock-scroll')) {
          $('body').removeClass('lock-scroll');
      }
      else {
          $('body').addClass('lock-scroll');
      }
    }  
    
    $(document).ready(function() {
      $('.icon-bar').click(function() {
         lockScroll();
      }); 
    });

  const elem = $('header');
  const scrolled = () => {
  const threshold = $(document).scrollTop() > 50;
  elem.toggleClass('scrolled', threshold);
  };
  $(window).on({ scroll: scrolled });
  $('body').css({'overflow':'hidden'});
  $(document).bind('scroll',function () { 
      window.scrollTo(0,0); 
  });
  $(document).unbind('scroll'); 
  $('body').css({'overflow':'visible'});

  $('.collapse').collapse()
  };

  const _activeListItem = () => {
    $('.faq-navigation .list-group-item').click(function() {
      $(this).addClass("active-js")
      $(this).siblings().removeClass("active-js")
    });
  };
  
  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _activeListItem();
  };

  return {
    init: init,
  };
})();
