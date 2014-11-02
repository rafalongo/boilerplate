// var browserSync  = require('browser-sync');
var pkg          = require('../../package.json');
var dstPath      = pkg['basePath']['stage'];

// Saiba mais sobre as opções em
// http://www.browsersync.io/docs/options/
module.exports = {

  /* Listagem de todos arquivos interessantes */
  files: [
    dstPath + '/css/**/*.css',
    dstPath + '/js/**/*.js',
    dstPath + '/**.html',
    dstPath + '/img/**/*.{jpg,jpeg,png,gif,svg}',
    dstPath + '/fonts/**/*.{ttf,eot,otf,woff,svg}'
  ],

  /* Configurações do servidor estático do browser-sync */
  server: {
    baseDir: dstPath, // geralmente __stage
    // directory: true,
    index: 'index.html'
  },

  /* Usando algum backend? Basta informar a string */
  proxy: false, // proxy: 'cliente.digitalbox.dev'

  exclude: false,
  startPath: null,
  ghostMode: {
    clicks: true,
    links: true,
    forms: true,
    scroll: true
  },
  open: true,
  xip: false,
  timestamps: true,
  fileTimeout: 1000,
  injectChanges: true,
  scrollProportionally: true,
  scrollThrottle: 0,
  notify: true,
  host: null,
  excludedFileTypes: [],
  reloadDelay: 0,
  online: false, // deste modo, não depende de conexão com web p/ funcionar. duh!
  browser: 'chrome' // pode ser 'firefox', pode ser ['chrome', 'firefox'] - nesse caso, abrem-se 2 browsers
};

// browserSync(config);
