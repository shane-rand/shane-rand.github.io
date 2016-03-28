/*
 * Front-end Boilerplate - r0.1.0
 * 2016-03-28 */

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