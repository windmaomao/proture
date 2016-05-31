(function() {
    'use strict';

    angular
        .module('app.test')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.test', {
            url: '/test/blank',
            templateUrl: 'app/examples/_test/blank.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })

        triMenuProvider.addMenu({
            name: 'Test',
            icon: 'zmdi zmdi-view-list-alt',
            type: 'dropdown',
            priority: 8.1,
            children: [{
                name: 'Blank Page',
                state: 'triangular.test',
                type: 'link'
            }]
        });
    }
})();
