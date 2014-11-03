var gulp           = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var prettify       = require('gulp-html-prettify');
var pkg 	         = require('../../package.json');
var srcPath        = pkg['basePath']['application'];
var dstPath        = pkg['basePath']['stage'];

nunjucksRender.nunjucks.configure([srcPath]);

gulp.task('htmls', function(){

  gulp.src([srcPath + '/pages/**/*.html', '!' + srcPath + '/nunj/**',])
      .pipe(nunjucksRender())
      .pipe(prettify({
        'indent_char': ' ',
        'indent_size': 2
      }))
      .pipe(gulp.dest(dstPath));
});