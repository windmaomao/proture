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
    .service('company', function(pt, bnd, $q) {
        this.all2 = function() {
            return pt.company2();
        }
        this.all = function() {
            var deferred = $q.defer();
            bnd.company.list()
                .success(function(res) {
                    return deferred.resolve(res.data);
                })
                .error(function(res) {
                    return deferred.reject();
                })
            ;
            return deferred.promise;
        };
    })
;
