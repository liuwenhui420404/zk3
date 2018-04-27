define(['swiper'], function() {
    function banner() {
        new Swiper('.ctn', {
            loop: true,
            autoplay: 1000
        })
        $('.clean').click(function() {
            console.log(55555)
            $('.content').hide()
        })
    }
    return banner
})