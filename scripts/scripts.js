
$(window).scroll((e) => {

    let landingSectionHeight = $('.landing').height();
    let wScroll = $(e.target).scrollTop();

    $('.overlay').css({
        "top": wScroll + 'px'
    });


    if (wScroll == 0) {
        $('.logo').css({
            'transform': 'translate(-50%,-50%)'
        });
    }
    else if (wScroll <= landingSectionHeight) {

        $('.logo').css({
            'transform': 'translate(-50%, ' + wScroll / 6 + '%)'
        });

        $('.go-down').css({
            'transform': 'translate(-50%, ' + wScroll * 3 + '%)'
        });

    }
});


$('.go-down').click((e) => {
    $('html, body').animate({
        scrollTop: $('#events-section').offset().top
    }, 1000);
});

$('.event').click(function () {
    let eventNo = $(this).attr('eventNo');
    $('.overlay').css({
        "display": "block"
    });
    $('.' + eventNo + '-event').css({
        "display": "block"
    });

    $('section').addClass('blur');
    $('.' + eventNo + '-event').removeClass('modalPopdown');
    $('.' + eventNo + '-event').addClass('modalPopup');
});

$('.modal-close-btn').click(function () {
    let eventNo = $(this).attr('eventNo');
    let s1 = $('.overlay');
    setTimeout(() => {
        let s = $('.overlay');
        $('.overlay').css({
            "display": "none"
        });
        $('.' + eventNo + '-event').css({
            "display": "none"
        });
    }, 200);

    $('section').removeClass('blur');
    $('.' + eventNo + '-event').removeClass('modalPopup');
    $('.' + eventNo + '-event').addClass('modalPopdown');
});