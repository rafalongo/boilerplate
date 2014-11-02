var gulp       = require('gulp');
var path       = require('path');
var imagemin   = require('gulp-imagemin');
var pkg        = require('../../package.json');
var srcPath    = pkg['basePath']['application'];
var bowerPath  = path.resolve( srcPath, '.bower_components' );
var dstPath    = pkg['basePath']['stage'];

gulp.task('vendor-assets', function() {

  gulp.src([
    bowerPath + '/bootstrap/dist/fonts/**'
  ])
    .pipe(gulp.dest(dstPath + '/fonts'));
});
