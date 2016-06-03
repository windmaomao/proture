var path = require('path');
var routes = require('./route');
var schedules = require('./schedule');
var plugins = require('./plugin');

var _path = function(name) {
    name = name || '';
    return path.join(__dirname, '../', name);
};

module.exports = {
    port: 7929,
    debug: 'info',
    mongo: 'mongodb://localhost/proture',
    app: _path(),
    model: '/model',
    controller: '/controller',
    scheduler: '/scheduler',
    plugger: '/plugin',
    prefix: '/v1',
    routes: routes,
    schedules: schedules,
    plugins: plugins
};
