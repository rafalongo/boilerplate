var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var pkg        = require('../../package.json');
var srcPath    = pkg['basePath']['application'];
var dstPath    = pkg['basePath']['stage'];

gulp.task('images', function() {
  return gulp.src( srcPath + '/img/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(changed(dstPath + '/img')) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(dstPath + '/img'));
});
