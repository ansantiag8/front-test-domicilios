var assign = Object.assign || require('object.assign')

var changed = require('gulp-changed')
var concat = require('gulp-concat')
var compilerOptions = require('../babel-options')
var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin')
var notify = require('gulp-notify')
var paths = require('../paths')
var plumber = require('gulp-plumber')
var rename = require('gulp-rename')
var runSequence = require('run-sequence')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var to5 = require('gulp-babel')

gulp.task('build-html', function () {
  return gulp.src(paths.html)
  .pipe(changed(paths.output, {extension: '.html'}))
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest(paths.output))
})

gulp.task('build-js', function () {
  return gulp.src(paths.js)
  .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
  .pipe(changed(paths.output, {extension: '.js'}))
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(to5(assign({}, compilerOptions.system())))
  .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
  .pipe(gulp.dest(paths.output))
})

gulp.task('build-sass', function () {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('theme.css'))
    .pipe(gulp.dest(paths.output))
})

gulp.task('build-index', function () {
  return gulp.src(paths.indexDev)
  .pipe(rename('index.html'))
  .pipe(gulp.dest('./', {overwrite: true}))
})

gulp.task('build', function (callback) {
  return runSequence(
    'clean',
    ['build-html', 'build-index', 'build-js', 'build-sass'],
    // ['build-js', 'build-html', 'build-css', 'build-index'],
    callback
  )
})
