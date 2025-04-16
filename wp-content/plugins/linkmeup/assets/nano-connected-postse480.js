jQuery(document).on("click", ".nano_cp_button", function (event) {
    event.preventDefault();
    window.open(nano_ajax_object.go_to, '_top');
    
    /*//Get parent container
    var $this = jQuery(this);
    var parent = $this.closest(".nano_cp_container");
    //$this.hide();
    //Get connected post ID
    var query_id = $this.data("nanocpid");
    var data = {
        'action': 'nano_cp_get_id',
        'post_id': query_id
    };
    
    
    
    //Ajax call - the content of connected post
    jQuery.ajax({
        type: 'POST',
        url: nano_ajax_object.ajaxurl,
        data: data,
        success: function (response) {
            if (response !== "error!") {
                //Valid response
                //jQuery(parent).html(response);
                window.open(response, '_top');
            } else {
                //Error
                $this.show();
                jQuery(parent).children("p").remove();
                jQuery(parent).append("<p>" + nano_ajax_object.error_message + "</p>");
            }
        },
        async: false
    });
    //Old Way
    /*jQuery.post(nano_ajax_object.ajaxurl, data, function (response) {
        if (response !== "error!") {
            //Valid response
            //jQuery(parent).html(response);
            window.open(response, '_blank');
        } else {
            //Error
            $this.show();
            jQuery(parent).children("p").remove();
            jQuery(parent).append("<p>" + nano_ajax_object.error_message + "</p>");
        }
    });*/
});