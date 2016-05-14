var routes = require('./route');

module.exports = {
    port: 7929,
    mongo: 'mongodb://localhost/test',
    model: __dirname + '/../model',
    controller: __dirname + '/../controller',
    passport: 'local',
    routes: routes
}
