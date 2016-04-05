/**
 * NG Admin module
 *
 * Use ng-admin to drive the admin website
 *
 * @date 03/25/16
 * @author Fang Jin <fang-a.jin@db.com>
*/

var provider = require('./provider');
var directive = require('./directive');

angular
    .module('myApp', ['ng-admin'])
    .config(provider.ngAdminConfigurationProvider)
    .config(provider.restangularProvider)
    .directive('dashboardPage', directive.dashboardDirective)
    .directive('starRating', directive.starRating)
;
