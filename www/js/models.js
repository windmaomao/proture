// models
angular.module('starter.models', ['firebase'])
    .service('pt', function($q, $firebaseArray) {
        var _data = [1, 2, 3];
        this.all = function() {
        };
        this.company = function() {
            return $q.when(_data);
        };
        this.company2 = function() {
            var ref = new Firebase("https://torrid-heat-2030.firebaseio.com/body/outline");
            return $q.when($firebaseArray(ref));
        };
    })
    .service('company', function(pt) {
        this.all = function() {
            return pt.company2();
        };
    })
;
