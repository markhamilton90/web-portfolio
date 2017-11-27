//░░░░░░░░░░░░░░░░░░░░░░░░░░░
//
//    DIRECTORY
//
//    _SmoothScroll
//    _Clipboard
//
//░░░░░░░░░░░░░░░░░░░░░░░░░░░



jQuery(window).on('load', function() {

    $('#hero-section h1').removeClass('faded');
    $('#hero-section h2').removeClass('faded');

    $('header .directory').removeClass('faded');
    $('header .cta-contact').removeClass('faded');

    $('#hero-section p').removeClass('faded');
    $('#hero-section .scroll-arrow').removeClass('faded');
});

jQuery(document).ready(function($){

    $(window).on('load scroll resize', function() {
        var scrollBottom = $(window).scrollTop() + $(window).height();
        $('.faded').each(function() {
            if ( ($(this).offset().top + 300 ) < scrollBottom ) {
                $(this).removeClass('faded');
            }
        });
    });


    //▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
    // _SmoothScroll
    //▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 700);
                return false;
            }
        }
    });


    //▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
    // _Clipboard
    //▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

    function copyToClipboard(string) {
        var temp = $('<input>');
        $('body').append(temp);
        temp.val(string).select();
        document.execCommand('copy');
        temp.remove();
    }

    $('#clipboard').on('click', function(e) {
        e.preventDefault();
        copyToClipboard('msh387@gmail.com');
    });


// jQuery
});
