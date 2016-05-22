/**
 * Project controller module
 *
 * @module controller
 *
 * @date 3/21/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

var name = 'project';
var routes = require('../utility/controllerRestify')(name);

// expose routes
module.exports = routes;
