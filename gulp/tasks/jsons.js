var gulp       = require('gulp');
var copyboy    = require('../util/copyboy');

gulp.task('jsons', copyboy('/json/**/*.json'));
