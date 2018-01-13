//░░░░░░░░░░░░░░░░░░░░░░░░░░░
//
//    DIRECTORY
//
//    _SmoothScroll
//    _Clipboard
//
//░░░░░░░░░░░░░░░░░░░░░░░░░░░

jQuery(window).on('load', function() {

    $('#hero-section h1').removeClass('hero-faded');
    $('#hero-section h2').removeClass('hero-faded');

    $('header .directory').removeClass('hero-faded');
    $('header .cta-contact').removeClass('hero-faded');

    $('#hero-section p').removeClass('hero-faded');
    $('#hero-section .scroll-arrow').removeClass('hero-faded');
});

jQuery(document).ready(function($){

    $('#hero-section h1').on('transitionend', function() {
        $(this).removeClass('bezier');
    });

    $('#hero-section h2').on('transitionend', function() {
        $(this).removeClass('bezier');
    });

    $(window).on('scroll resize', function() {
        var scrollBottom = $(window).scrollTop() + $(window).height();
        $('.faded').each(function() {
            if ( ($(this).offset().top + 300 ) < scrollBottom ) {
                $(this).removeClass('faded');

                //screenshots only
                if ($(this).find('.screenshot').hasClass('no-scroll')) {
                    $(this).on('transitionend', function() {
                        $(this).find('.screenshot').removeClass('no-scroll');
                    });
                }
            }

        });
    });

    $('.directory h4').on('click', function() {
        if ( $(window).width() <= 600 ) {
            if ( $('.directory h4').hasClass('toggled') ) {
                $('.directory h4').removeClass('toggled');
                $('.directory ul').slideUp(300);
            } else {
                $('.directory h4').addClass('toggled');
                $('.directory ul').slideDown(300);
            }
        }
    });

    $('.directory li').on('click', function() {
        if ( $(window).width() <= 600 ) {
            $('.directory ul').slideUp(300);
        }
    });

    $(window).on('resize', function() {
        if ( $(window).width() > 600 ) {
            if ( $('.directory ul')[0].hasAttribute('style') ) {
                $('.directory ul').removeAttr('style');
            }
            if ( $('.directory h4').hasClass('toggled') ) {
                $('.directory h4').removeClass('toggled');
            }
        }
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
