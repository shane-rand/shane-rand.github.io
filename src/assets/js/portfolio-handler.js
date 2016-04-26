(function($) {


    function addEventListeners() {

      var spotlightBtn = $('.spotlight-button');
      var row = 1;

      spotlightBtn.on('click',function(){

        row += 1;
        $("[data-row='"+row+"']").fadeIn(600).removeClass('hidden');

      });

    }


    $(document).ready(function(){
      addEventListeners();
    });


})(jQuery);