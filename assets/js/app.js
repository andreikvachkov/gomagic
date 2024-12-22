function YouTubeGetID(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}
$('.leswin__video, .whatgame__media__video').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var link = $(this).attr('href')
    var id = YouTubeGetID(link)
    var thisw = $(this).outerWidth()
    var thish = $(this).outerHeight()
    $(this).append('<iframe width="' + thisw + '" height="' + thish + '" src="https://www.youtube.com/embed/' + id + '?autoplay=1&enablejsapi=1&" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
})


const lesvideo__swiper = new Swiper('.lesvideo__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 12,

    navigation: {
        nextEl: '.lesvideo__swiper__next',
        prevEl: '.lesvideo__swiper__prev',
    },

});


function openRegister() {
    $('.register_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closeRegister() {
    $('.register_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.register_popup__close').on('click', closeRegister);

$('.register_popup__open').on('click', openRegister);

function openPlay() {
    $('.play_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closePlay() {
    $('.play_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.play_popup__close').on('click', closePlay);

$('.play_popup__open').on('click', openPlay);

function openLang() {
    $('.header__learn__content').toggleClass('active');
}

$('.header__learn_btn').on('click', openLang);


$(document).on('click', function (event) {
    if (
        !$(event.target).closest('.header__learn__content').length &&
        !$(event.target).closest('.header__learn_btn').length
    ) {
        $('.header__learn__content').removeClass('active');
    }
});