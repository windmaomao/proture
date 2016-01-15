'use strict';

/**
 * @ngdoc interface
 * @name service.backand
 * @requires vendor.Backand
 * @description
 *   Backand service wrapper
 *
 * @date 1/15/16
 * @author Fang Jin <windmaomao@gmail.com>
 */
angular
    .module('service.backand', ['backand'])
    .config(function(BackandProvider) {
        BackandProvider.setAppName('qplot');
        BackandProvider.setAnonymousToken('74369a42-1606-4d4b-8d50-58259ea593ab');
    })
    /**
     * @ngdoc service
     * @name bnd.bnd
     * @description Backand service wrapper
     * @requires angular.$http
     * @requires vendor.Backend
     */
    .factory('bnd', function($http, Backand) {
        var factory = {};

        factory.listOfObjects = function() {
          return $http({
            method: 'GET',
            url: Backand.getApiUrl() + '/1/table/config',
            params: {
              pageSize: 200,
              pageNumber: 1,
              filter: '[{fieldName:"SystemView", operator:"equals", value: false}]',
              sort: '[{fieldName:"captionText", order:"asc"}]'
            }
          });
        }

        factory.objectData = function(name, pageSize, pageNumber, sort, filter) {
          return $http({
            method: 'GET',
            url: Backand.getApiUrl() + '/1/objects/' + name,
            params: {
              pageSize: pageSize || 5,
              pageNumber: pageNumber || 1,
              filter: filter || '',
              sort: sort || ''
            }
          });
        }

        factory.company = {
            list: function() {
                // return $http.get(Backand.getApiUrl() + '/1/objects/company');
                return factory.objectData('company');
            }
        };


        return factory;
    })
;
