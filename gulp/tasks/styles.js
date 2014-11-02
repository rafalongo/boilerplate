var path         = require('path');
var less         = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var pkg          = require('../../package.json');
var srcPath      = pkg['basePath']['application'];
var dstPath      = pkg['basePath']['stage'];

gulp.task('styles', function() {
  return gulp.src(path.join(srcPath, 'less', 'main.less'))
    .pipe(less({
      paths: [path.join('bower_components')],
      sourceMap: true,
      outputSourceFiles: true,
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest(path.join(dstPath, 'css')));
});
