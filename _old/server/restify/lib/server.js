/**
 * Server module
 *
 * @module server
 *
 * @requires restify
 * @requires path
 * @requires config
 *
 * @date 3/18/16
 * @author Fang Jin <fang-a.jin@db.com>
 */

var restify = require('restify');
var path = require('path');
var config = require('./config');
var logger = require('morgan');

// Connect to database
if (config.database.mongo) {
    var mongoose = require('mongoose');
    mongoose.connect(config.database.mongo);
}

// Create server
var server = restify.createServer({
  name: config.name,
  version: config.version
});

// Setup server utilities
server.use(logger('dev'));
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

// Register server routes
require('./route')(server);

// Host static app
if (config.app.path) {
    server.get(/.*/, restify.serveStatic({
        directory: path.join(__dirname, '..', config.app.path),
        default: 'index.html'
    }));
}

// Start server
server.listen(config.server.port || 8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
