var routes = require('./route');
var schedules = require('./schedule');
// var stat = require('./stat');

module.exports = {
    port: 7929,
    log: 'verbose',
    passport: 'local',
    mongo: 'mongodb://localhost/proture',
    prefix: '/v1',
    model: __dirname + '/../model',
    controller: __dirname + '/../controller',
    scheduler: __dirname + '/../scheduler',
    routes: routes,
    schedules: schedules,
    // plugins: {
    //     stat: stat
    // }
}
