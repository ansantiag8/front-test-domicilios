var gulp = require('gulp')
var browserSync = require('browser-sync')

gulp.task('server', function (done) {
  browserSync({
    online: false,
    open: false,
    port: 9000,
    ghostMode: false,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        next()
      }
    }
  }, done)
})
