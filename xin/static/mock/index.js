var banner = require("./data/banner.json")
var mockApi = {
    "/api/banner": banner
}
module.exports = function(url) {
    return mockApi[url]
}