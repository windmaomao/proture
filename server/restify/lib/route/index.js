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
var version = config.api.version || '';
var routeGroup = require('../config/routes');
var controllerPath = '../' + config.controller.path + '/';

module.exports = function(server) {
    console.log('Registered Routes:'.white);
    _.each(routeGroup, function(group, groupName) {
        console.log(groupName.green);

        // define resource name
        var resourceName = groupName.toLowerCase();

        // merge with global settings
        group = _.assign({
            blueprint: config.api.blueprint,
            items: {}
        }, group);

        // define controller, group path
        var controllerName, groupPath;
        if (group.blueprint) {
            controllerName = resourceName;
            groupPath = '/' + resourceName;
            group = _.assign({ restify: true }, group);
        } else {
            controllerName = group.controller;
            groupPath = group.path;
            group = _.assign({ restify: false }, group);
        }

        // verbose
        if (config.log) {
            console.log('group:', group);
        }

        // create controller
        var controller = require(controllerPath + controllerName + 'Controller');

        // add routes
        var routes = [];
        _.each(group.items, function(item, itemName) {
            routes.push({
                type: item.type,
                path: groupPath + item.path,
                func: controller[item.action]
            });
        });
        if (group.restify) {
            routes.push({
                type: 'REST',
                path: groupPath,
                func: controller
            });
        }

        // register routes
        _.each(routes, function(route) {
            var type = ('         ' + '[' + route.type + '] ').slice(-9);
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
                    server.put(url + '/:id', route.func.patch);
                    server.del(url + '/:id', route.func.del);
                default:
            }
        })
    });
}
