window.site = window.site || {};

site.dashboard = (function($) {
    function initSidebar() {
        $(document).on('click', '.sidebar-toggle-button', function(){
            if($('.sidebar').hasClass('close')){
                $('.sidebar-toggle-button').css('transform','rotate(0deg)');
                $('.sidebar, .dashboard-header, .dashboard').removeClass('close');
                $('.sidebar, .dashboard-header, .dashboard').addClass('open');
            } else {
                $('.sidebar-toggle-button').css('transform','rotate(-180deg)');
                $('.sidebar, .dashboard-header, .dashboard').removeClass('open');
                $('.sidebar, .dashboard-header, .dashboard').addClass('close');
            }
        });
    }

    return {
        initSidebar: initSidebar
    };
}(jQuery));
