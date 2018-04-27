require(['jq', '../js/comment/template', 'hand', 'swiper', 'banner'], function($, template, hand, swiper, banner) {
    console.log($)
    $.ajax({
        url: "/api/banner",
        type: "get",
        dataType: "json",
        success: function(data) {
            console.log(data)
            template('#banner-tpl', {
                data: data
            }, ".ban")
            banner()
        }
    })

})