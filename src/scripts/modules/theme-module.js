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
  };


  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _activeListItem();
    _lockScroll();
  };

const elem = $('header');
const scrolled = () => {
 const threshold = $(document).scrollTop() > 50;
 elem.toggleClass('scrolled', threshold);
 };
$(window).on({ scroll: scrolled });
  return {
    init: init,
  };
})();

const _activeListItem = () => {
  $('.navigation .list-group-item').click(function() {
    $(this).addClass("active-js")
    $(this).siblings().removeClass("active-js")
  });
};
