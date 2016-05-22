/**
 * http-server driver module
 *
 * Code borrowed from http-server module
 *
 * @date 04/01/16
 * @author Fang Jin <fang-a.jin@db.com>
*/

var httpServer = require('http-server');
var colors = require('colors');
var opts = require('./config.js');

// define a logger
logger = {
    info: console.log,
    request: function (req, res, error) {
      var date = new Date();
      if (error) {
        logger.info(
          '[%s] "%s %s" Error (%s): "%s"',
          date, req.method.red, req.url.red,
          error.status.toString().red, error.message.red
        );
      }
      else {
        logger.info(
          '[%s] "%s %s" "%s"',
          date, req.method.cyan, req.url.cyan,
          req.headers['user-agent']
        );
      }
    }
};

// define options
var options = {
    port: opts.port,
    root: opts.statics['.*'],
    cors: false,
    https: false,
    cache: false,
    showDir: false,
    autoIndex: false,
    robots: false,
    ext: "",
    proxy: opts.routes['/v1'],
    // headers: "",
    logFn: logger.request,
    before: "",
};

var server = httpServer.createServer(options);
server.listen(options.port, '0.0.0.0', function() {
    logger.info(['Starting up http-server, serving '.yellow,
        server.root.cyan,
        '\nAvailable on:'.yellow,
        (' ' + options.port).green
    ].join(''));
});

if (process.platform === 'win32') {
  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  }).on('SIGINT', function () {
    process.emit('SIGINT');
  });
}

process.on('SIGINT', function () {
  logger.info('http-server stopped.'.red);
  process.exit();
});

process.on('SIGTERM', function () {
  logger.info('http-server stopped.'.red);
  process.exit();
});
