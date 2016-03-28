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