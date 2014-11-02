var gulp       = require('gulp');
var copyboy    = require('../util/copyboy');

gulp.task('fonts', copyboy('/fonts/**/*.{ttf,eot,otf,woff,svg}'));