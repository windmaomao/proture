var path = require('path');
var routes = require('./route');
var schedules = require('./schedule');
var plugins = require('./plugin');

var _path = function(name) {
    return path.join(__dirname, '../', name);
};

module.exports = {
    port: 7929,
    debug: 'verbose',
    passport: 'local',
    mongo: 'mongodb://localhost/proture',
    prefix: '/v1',
    model: _path('model'),
    controller: _path('controller'),
    scheduler: _path('scheduler'),
    routes: routes,
    schedules: schedules,
    plugger: _path('plugin'),
    plugins: plugins
};
