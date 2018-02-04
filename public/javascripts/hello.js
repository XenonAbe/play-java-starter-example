if (window.console) {
  console.log("Welcome to your Play application's JavaScript!");
}

(function ($) { "use strict";
    $(function () {
        $("#postTest").on('click', function () {
            console.log("Button clicked");
            console.time('test');
            $.ajax({
                contentType: 'application/json',
                processData: false,
                dataType: "json",
                data: "{}",
                type: "POST",
                url: "/test",
                timeout: 1200000
            }).done( function() {
                console.log("done");

            }).fail( function() {
                console.log("fail");

            }).always( function() {
                console.timeEnd('test');
            });

            return;
        });
    });
})(jQuery);
