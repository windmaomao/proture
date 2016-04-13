/**
 * NG Admin module
 *
 * Use ng-admin to drive the admin website
 *
 * @date 03/25/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

var options = require('./config');
var directive = require('./directive');

angular
    .module('myApp', ['ng-admin-restify'])
    .directive('dashboardPage', directive.dashboardDirective)
    .directive('starRating', directive.starRating)
    .config(function(ngAdminRestifyProvider) {
        var app = ngAdminRestifyProvider.configure(options);
    })
;
