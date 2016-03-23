/**
 * Route module
 *
 * @module route
 * @requires controller
 * @requires lodash

 * @date 3/18/16
 * @author Fang Jin <fang-a.jin@db.com>
 */

var colors = require('colors');
var _ = require('lodash');
var config = require('../config');
var indexController = require('../controller/indexController');
var projectController = require('../controller/projectController');
var updateController = require('../controller/updateController');

var version = config.api.version || '';
var routes = [
    { type: 'GET',  path: '/',              func: indexController.index     },
    { type: 'REST', path: '/project',       func: projectController         },
    { type: 'REST', path: '/update',        func: updateController          }
];

module.exports = function(server) {
    console.log('Registered Routes:'.white);
    _.each(routes, function(route) {
        var type = ('       ' + '[' + route.type + '] ').slice(-7);
        var url = version + route.path;
        console.log(type.green + url);
        switch (route.type) {
            case 'GET':
                server.get(url, route.func);
                break;
            case 'POST':
                server.post(url, route.func);
                break;
            case 'REST':
                server.get(url, route.func.query);
                server.get(url + '/:id', route.func.detail);
                server.post(url, route.func.insert);
            default:
        }
    });
}
