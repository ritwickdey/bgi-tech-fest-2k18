
$(window).scroll((e) => {

    let landingSectionHeight = $('.landing').height();
    let wScroll = $(e.target).scrollTop();

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