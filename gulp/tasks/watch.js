var gulp          = require('gulp');
var browserifyBundler = require('../util/browserifyBundler');
var pkg           = require('../../package.json');
var srcPath       = pkg['basePath']['application'];

gulp.task('watch', [
  'preprocessors', 
  // 'assets'
], function() {
	browserifyBundler(true)();
  gulp.watch(srcPath + '/less/**', ['styles']);
	gulp.watch(srcPath + '/**/*.{html,nunj}', ['htmls']);
});
