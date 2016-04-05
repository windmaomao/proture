/**
 * Directive module
 *
 * @date 04/01/16
 * @author Fang Jin <fang-a.jin@db.com>
*/

var dashboardDirectiveTemplate = require('../view/dashboard.html');

var directive = {};

directive.dashboardDirective = function() {
    return {
        restrict: 'AE',
        template: dashboardDirectiveTemplate,
        replace: false,
    };
};

directive.starRating = function() {
    return {
        restrict: 'E',
        scope: {
        	stars: '@'
        },
        link: function(scope, elm, attrs, ctrl) {
        	scope.starsArray = Array.apply(null, { length: parseInt(scope.stars) }).map(Number.call, Number);
        },
        template: `<i ng-repeat="star in starsArray" class="glyphicon glyphicon-star"></i>`
    };
};

module.exports = directive;
