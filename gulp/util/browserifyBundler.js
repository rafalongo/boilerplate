var browserify    = require('browserify');
var watchify      = require('watchify');
var source        = require('vinyl-source-stream');
var gulp          = require('gulp');
var gutil         = require('gulp-util');
var handleErrors  = require('./handleErrors');
var pkg           = require('../../package.json');
var srcPath       = pkg['basePath']['application'];
var dstPath       = pkg['basePath']['stage'];


// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function bundleScripts(isWatching) {

  return function () {

    var props = {
      entries: [srcPath + '/js/main.js'],
      cache: {},
      packageCache: {},
      fullPaths: true
    };

    var bundler = isWatching? watchify(browserify(props)): browserify(props);

    function rebundle() {

      return bundler.bundle()
        .on('error', handleErrors)
        .pipe(source('main.js'))
        .pipe(gulp.dest(dstPath + '/js'))
        .on('end', function() {
          gutil.log('Browserify bundled.');
        });
    }

    bundler.on('update', function() {
      rebundle();
      gutil.log('Rebundling...');
    });

    return rebundle();
  }
}

module.exports = bundleScripts;
