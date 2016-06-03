/**
 * Server
 *
 * @date 4/29/16
 * @author Fang Jin <fang-a.jin@db.com>
 */

// var config = require('./config');
var config = require('config-node')({
    env: process.env.NODE_ENV || 'index'
});
var landing = require('kingslanding');

landing.lift(config, function() {
    global.landing = landing;
});
