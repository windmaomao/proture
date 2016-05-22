/**
 * Project member controller module
 *
 * @module controller
 *
 * @date 4/23/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

var name = 'member';
var routes = require('../utility/controllerRestify')(name);

// expose routes
module.exports = routes;
