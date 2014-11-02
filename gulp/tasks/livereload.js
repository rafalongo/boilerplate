var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var bs_config     = require('../util/browserSync-config');

gulp.task('livereload', [
  'preprocessors', 
  // 'assets'
], function() {
  browserSync(bs_config);
});
