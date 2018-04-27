var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    mock = require('./static/mock')
gulp.task('default', function() {
    gulp.src('.').pipe(webserver({
        host: 'localhost',
        port: 9898,
        middleware: function(req, res, next) {
            if (/\/api/g.test(req.url)) {
                console.log("aaaa")
                res.end(JSON.stringify(
                    mock(req.url)
                ))
            } else {
                next()
            }
        }
    }))
})