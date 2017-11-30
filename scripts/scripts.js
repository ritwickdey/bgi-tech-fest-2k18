$('document').ready(() => {

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

    let openedPopUpEventId =  null;

    $('.event').click(function () {
        let eventNo = $(this).attr('eventNo');
        openedPopUpEventId = eventNo;

        $('.overlay').css({
            "top":  $(window).scrollTop() + 'px'
        });

        $('.overlay').css({
            "display": "block"
        });
        $('.' + eventNo + '-event').css({
            "display": "block"
        });

        $('section').addClass('blur');
        $('html').addClass('disabled-scrolling');
        $('.' + eventNo + '-event').removeClass('modalPopdown');
        $('.' + eventNo + '-event').addClass('modalPopup');
    });

    let closeModalAction = function () {
        let eventNo = $(this).attr('eventNo') || openedPopUpEventId;
        let s1 = $('.overlay');
        setTimeout(() => {
            $('section').removeClass('blur');
            let s = $('.overlay');
            $('.overlay').css({
                "display": "none"
            });
            $('.' + eventNo + '-event').css({
                "display": "none"
            });
        }, 300);

        $('.' + eventNo + '-event').removeClass('modalPopup');
        $('.' + eventNo + '-event').addClass('modalPopdown');
        $('html').removeClass('disabled-scrolling');

    }

    $('.modal-close-btn').click(closeModalAction);
    $('.overlay').click(closeModalAction);
    $('.event-details').click((e) => e.stopPropagation());

});