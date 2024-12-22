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