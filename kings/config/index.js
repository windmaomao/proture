var routes = require('./route');

module.exports = {
    port: 7929,
    log: 'info',
    passport: 'local',
    mongo: 'mongodb://localhost/proture',
    prefix: '/v1',
    model: __dirname + '/../model',
    controller: __dirname + '/../controller',
    routes: routes
}
