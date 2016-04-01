/*
 * Front-end Boilerplate - r0.1.0
 * 2016-04-01 */

(function($) {



    function addEventListeners() {
      var menuLabel = $('.menu-label');
      var menu = $('.menu');
      var menuItems = menu.find('li');

      menuLabel.on('click',function(){
        if(menu.hasClass('show')) {
          menu.fadeOut(200);
          menu.removeClass('show');
        } else {
          menu.fadeIn(200);
          menu.addClass('show');
        }
      });

      menuItems.each(function(){
        $(this).hover(function(){
          $(this).find('i').fadeIn({queue: false, duration: 300});
          $(this).find('i').animate({ left: "15px" }, 200);
        }, function() {
          $(this).find('i').fadeOut({queue: false, duration: 200});
          $(this).find('i').animate({ left: "0" }, 200);
        });
      });

    }


    $(document).ready(function(){
      addEventListeners();
    });


})(jQuery);

(function($) {


    function addEventListeners() {
      var menuItems = $('.square');
      console.log(menuItems);


      menuItems.each(function(){
        $(this).on('click',function(){
          var thisSection = $(this).attr('data-section');
          console.log(thisSection);
          var sectionContent = $(".content[data-section='"+thisSection+"']");
          if(!sectionContent.hasClass('show')) {
            sectionContent.addClass('show');
            sectionContent.siblings().removeClass('show');

          }

        });
      });

    }


    $(document).ready(function(){
      addEventListeners();
    });


})(jQuery);

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