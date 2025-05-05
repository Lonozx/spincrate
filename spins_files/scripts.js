$(document).on('click', '.btn-main, .spin-again', function () {
    let wheel_figure = $('.wheel figure'),
        wheel_inner = $('.wheel-inner'),
        wheel_outer = $('.wheel-outer'),
        title_h1 = $('.title'),
        wheel_inner_anim = $('.anim');

    title_h1.animate({opacity: 0}, 250);
    wheel_outer.addClass('disabled');
    wheel_figure.removeClass('animated');
    wheel_inner_anim.hide();

    if (wheel_inner.hasClass('wheel-animated') === false) {
        wheel_inner.addClass('wheel-animated');
        wheel_inner_anim.addClass('animated-1');

        setTimeout(function () {
        }, 3500);
        setTimeout(function () {
            setTimeout(function () {
                $('.popup').fadeIn('fast');
                $('body').addClass('overflow-hidden');
            }, 0)

        }, 4000);
    } else if (wheel_inner.hasClass('wheel-animated') === true) {
        $('.popup').fadeOut('fast');
        wheel_inner.addClass('wheel-animated-3');
        wheel_inner_anim.addClass('animated-3');

        setTimeout(function () {
            $('.popup').find('.popup-gold, .spin-again').hide();
            $('.popup').find('.popup-scarab, .popup-amount, .get-reward').show();
        }, 3000);

        setTimeout(function () {
            $('.popup').find('.popup-img.n-1, .spin-again').hide();
            $('.popup').find('.popup-img.n-2, .popup-amount, .get-reward').show();
            $('.popup').fadeIn('fast');
            $('body').addClass('overflow-hidden');
        }, 4000);
    }
})
