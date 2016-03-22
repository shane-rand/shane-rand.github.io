(function($) {



    function addEventListeners() {
      var menuLabel = $('.menu-label');
      var menu = $('.menu');
      var menuItems = menu.find('li');

      menuLabel.on('click',function(){
        if(menu.hasClass('show')) {
          menu.removeClass('show');
        } else {
          menu.addClass('show');
        }
      });

      menuItems.each(function(){
        $(this).hover(function(){
          $(this).find('i').fadeIn(200);
          console.log('in');
        }, function() {
          $(this).find('i').fadeOut(200);
          console.log('out');
        });
      });

    }


    $(document).ready(function(){
      addEventListeners();
    });


})(jQuery);