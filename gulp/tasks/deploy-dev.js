var gulp     = require('gulp');
var pkg      = require('../../package.json');
var srcPath  = pkg['basePath']['deliverable'];
var deployer = require('../util/deployer');

gulp.task('deploy-dev', ['deliverable'], function() {
  
	return deployer('password hint', {
		host : 'user@digitalbox.cc',
		src  : srcPath,
		dest : '/home/path/to/app/'
	});

});
