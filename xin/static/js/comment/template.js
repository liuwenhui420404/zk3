define(['jq', "hand"], function($, hand) {
    return function(id, data, content) {
        var tpl = /#/g.test(id) ? $(id).html() : id
        var template = hand.compile(tpl);
        var html = template(data);
        if (content) {
            $(content).html(html)
        } else {
            return html
        }
    }
})