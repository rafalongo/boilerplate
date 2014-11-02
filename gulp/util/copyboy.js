var gulp       = require('gulp');
var changed    = require('gulp-changed');
var path       = require('path');
var pkg        = require('../../package.json');
var srcPath    = pkg['basePath']['application'];
var dstPath    = pkg['basePath']['stage'];
var chalk      = require('chalk');

module.exports = function (from, to) {
  return function () {

    var src = path.join(srcPath, from);
    var mirror = path.dirname(from).replace(/\*/g,'');
    var dst = path.join(dstPath, to || mirror);

    console.log(chalk.green('\n     _.-"""-.          '));
    console.log(chalk.green('   ." \\      `".      '));
    console.log(chalk.green('  /  .-"---._   \\     copyboy!'));
    console.log(chalk.green('  |_/  _   _ `\\_|     '));
    console.log(chalk.green('  / |  o   o  | \\    ', chalk.white('from: ', src)));
    console.log(chalk.green('  \\/     7     \\/    ', chalk.white('to: ', dst)));
    console.log(chalk.green('   \\   .___.   /      '));
    console.log(chalk.green('    \'._  _  _.\'      '));
    console.log(chalk.green('       )   (           '));

    return gulp.src(src)
      .pipe(changed(dst))
      .pipe(gulp.dest(dst));
  }
}
