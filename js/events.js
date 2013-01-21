(function ($) {
    $(document).ready(function () {
        $('ul.slider').each(function () {
            $(this).jbhSlider({
                selector: null,
                css: {
                    height:465,
                    width: 620
                },
                transition: {
                    timer: 2000
                },
                pagination: {
                    type: null
                },
                navigation: {
                    active: false
                }
            });
        });
    });
})(jQuery);
