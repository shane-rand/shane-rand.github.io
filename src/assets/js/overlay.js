(function($) {


    function addEventListeners() {

     var portfolioLinks = $('.spotlight-copy').find('a');
     var overlayBG = $('.overlay-desktop-bg');

     portfolioLinks.each(function(){
      $(this).on('click',function(){
        var project = $(this).attr('data-overlay');
        console.log(project);
        var overlay = $(".overlay-desktop[data-overlay='"+project+"']");
        var overlayCloseButton = overlay.find($('.close-overlay'));
        console.log(overlayCloseButton);
        overlayBG.fadeIn(200);
        overlay.fadeIn(200);
        $('body').addClass('no-scroll');

        overlayBG.on('click',function(){
          overlay.fadeOut(200);
          $(this).fadeOut(200);
          $('body').removeClass('no-scroll');
        });

        overlayCloseButton.on('click',function(){
          overlay.fadeOut(200);
          $(overlayBG).fadeOut(200);
          $('body').removeClass('no-scroll');
        });


      });
     });

     overlayBG.on('click',function(){

     });

    }


    $(document).ready(function(){
      addEventListeners();
    });


})(jQuery);