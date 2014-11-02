var gulp          = require('gulp');
var spritesmith   = require('gulp.spritesmith');
var filter        = require('gulp-filter');

var path       = require('path');
var pkg        = require('../../package.json');
var srcPath    = pkg['basePath']['application'];
var dstPath    = pkg['basePath']['stage'];


module.exports = function (spriteSrcDir, spriteImgDst) {

  // deduções partindo do spriteSrcDir
  var styleFormat = 'less';
  var src = path.join(srcPath, spriteSrcDir);
  var mirror = path.dirname(spriteSrcDir).replace(/\*/g,'');
  var spriteSufix = path.basename(mirror);

  // setando paths e nomes de destino
  var spriteImgDst = spriteImgDst? path.join(dstPath, spriteImgDst) : path.resolve(path.join(dstPath, mirror), '..');
  var styleDst = path.join(srcPath, styleFormat, 'generated');
  var spriteName = 'sprite-' + spriteSufix + '.png';
  var styleName = 'sprite-' + spriteSufix + '.' + styleFormat;

  console.log('\n    ,             ');
  console.log('   /(  ___________  ');
  console.log('  |  >:===========` ');
  console.log('   )(               ');
  console.log('   ""    spriter!   ');
  console.log('\n saved \"' + spriteName + '\" and \"' + styleName + '\"\n');
  
  //spritesmith com engine pngsmith
  var spriteData =  gulp.src(src)
    .pipe(filter('*.png'))
    .pipe(spritesmith({
      algorithm: 'binary-tree',
      padding: 10,
      imgName: spriteName,
      cssName: styleName,
      cssFormat: styleFormat,
      imgPath: '../img/' + spriteName,
      engine: 'pngsmith'
    }));

  spriteData['img'].pipe(gulp.dest(spriteImgDst));
  spriteData['css'].pipe(gulp.dest(styleDst));
}
