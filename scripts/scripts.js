
$(window).scroll((e) => {

    let landingSectionHeight = $('.landing').height();
    let wScroll = $(e.target).scrollTop();

    if (wScroll <= landingSectionHeight) {

        $('.logo').css({
            'transform': 'translate(-50%, ' + wScroll / 3 + '%)'
        });

    }
});