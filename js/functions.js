window.site = window.site || {};

site.dashboard = (function($) {
    function initSidebar() {
        $('.sidebar .menu-icon').on('click', function(){
            if($('.sidebar').hasClass('close')){
                $(this).css('transform','rotate(180deg)');
                $('.sidebar').removeClass('close');
                $('.sidebar').addClass('open');
            } else {
                $(this).css('transform','rotate(0deg)');
                $('.sidebar').removeClass('open');
                $('.sidebar').addClass('close');
            }
        });
    }

    return {
        initSidebar: initSidebar
    };
}(jQuery));
