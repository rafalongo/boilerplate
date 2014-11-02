var gulp       = require('gulp');
var path       = require('path');
var uglify     = require('gulp-uglify');
var concat     = require('gulp-concat');
var pkg        = require('../../package.json');
var srcPath    = pkg['basePath']['application'];
var bowerPath  = path.resolve('bower_components');
var dstPath    = pkg['basePath']['stage'];


gulp.task('vendor-scripts', function() {

  var bowerize = function(item) {
    return path.join(bowerPath, item);
  };

  var sources = [
    '/jquery/dist/jquery.js',
    // '/lodash/dist/lodash.js',
  ].map(bowerize);

  gulp.src(sources)
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(dstPath + '/js'));
});
