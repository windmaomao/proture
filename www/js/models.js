// models
angular.module('starter.models', [])
    .service('pt', function($q) {
        var _data = [1, 2, 3];
        this.all = function() {
        };
        this.company = function() {
            return $q.when(_data);
        };
    })
    .service('company', function(pt) {
        this.all = function() {
            return pt.company();
        };
    })
;
