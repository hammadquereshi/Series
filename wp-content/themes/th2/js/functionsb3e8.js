/**
 * Theme functions file
 */
(function ($) {

    /**
    * Document ready (jQuery)
    */
    $(function () {


        /**
         * Activate superfish menu.
         */
        $('.sf-menu').superfish({
            'speed': 100,
            'delay' : 0,
            'animation': {
                'height': 'show'
            }

        });


        /**
         * Activate jQuery.mmenu.
         */

        $("#menu-top-slide").mmenu({
            slidingSubmenus: false
        });

        $("#menu-main-slide").mmenu({
            slidingSubmenus: false
        });


        /**
         * Activate FitVids.
         */
        $(".entry-content, .video-cover, #slider, .zoomvideo_big, #content").fitVids();


    });


})(jQuery);